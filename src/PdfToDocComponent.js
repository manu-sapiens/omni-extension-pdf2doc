/**
 * Copyright (c) 2023 MERCENARIES.AI PTE. LTD.
 * All rights reserved.
 */

//@ts-check
// pdftodoc.js
import { OAIBaseComponent, WorkerContext, OmniComponentMacroTypes } from 'omni-sockets';
import { setComponentInputs, setComponentOutputs, setComponentControls } from './utils/components_lib.js';
const NS_ONMI = 'pdf2doc';

import PDFParser from 'pdf2json';
import { initialize_hasher, DEFAULT_HASHER_MODEL } from './utils/hashers.js'
import { save_text_to_cdn } from './utils/cdn.js';
import { is_valid, clean_string, console_log, rebuildToTicketObjectsIfNeeded, parse_text_to_array } from './utils/utils.js';
import { user_db_delete, user_db_get, user_db_put } from './utils/database.js';

let load_pdf_component = OAIBaseComponent
  .create(NS_ONMI, "pdf2doc")
  .fromScratch()
  .set('title', 'Convert pdf to text document')
  .set('category', 'Text Manipulation')
  .set('description', 'Convert pdf files to omnitool document format.')
  .setMethod('X-CUSTOM')
  .setMeta({
    source: {
      summary: "Convert pdf files to omnitool document format",
      links: {
        "PDF-parse Github": "https://github.com/UpLab/pdf-parse",
      }
    },
    });

// Adding input(s)
const inputs = [
  { name: 'documents', type: 'array', customSocket: 'documentArray', title: 'PDF document(s) to convert', defaultValue: [] },
  { name: 'url', type: 'string', title: 'and/or PDF url(s)', customSocket: 'text' },
  { name: 'overwrite', type: 'boolean', defaultValue: false, description: 'Overwrite the existing files in the CDN' },
];
load_pdf_component = setComponentInputs(load_pdf_component, inputs);

// Adding control(s)
const controls = [
  { name: "documents", placeholder: "AlpineCodeMirrorComponent" },
];
load_pdf_component = setComponentControls(load_pdf_component, controls);

// Adding outpu(t)
const outputs = [
  { name: 'documents', type: 'array', customSocket: 'documentArray', title: 'TEXT Documents', description: 'The converted documents' },
];
load_pdf_component = setComponentOutputs(load_pdf_component, outputs);


// Adding _exec function
load_pdf_component.setMacro(OmniComponentMacroTypes.EXEC, parsePayload);


async function parsePayload(payload, ctx) {
  const documents = payload.documents;
  const url = payload.url;
  const overwrite = payload.overwrite;

  const text_cdns = await pdfToDoc(ctx, documents, url, overwrite);
  const return_value = { result: { "ok": true }, documents: text_cdns};

  return return_value;
}


// ---------------------------------------------------------------------------
async function pdfToDoc(ctx, passed_documents_cdns, url, overwrite = false) {

  console.time("load_pdf_component_processTime");

  let passed_documents_are_valid = (passed_documents_cdns != null && passed_documents_cdns != undefined && Array.isArray(passed_documents_cdns) && passed_documents_cdns.length > 0);
  if (passed_documents_are_valid) {
      console_log(`read #${passed_documents_cdns.lentgh} from "documents" input, passed_documents_cdns = ${JSON.stringify(passed_documents_cdns)}`);
    }

  const parsedArray = parse_text_to_array(url);
  const cdn_tickets = rebuildToTicketObjectsIfNeeded(parsedArray);

  let documents = [
    ...(passed_documents_cdns || []), // If array1 is null, spread an empty array
    ...(cdn_tickets || [])  // If array2 is null, spread an empty array
  ];

  if (is_valid(documents) == false) throw new Error(`load_pdf_component: documents_array = ${JSON.stringify(documents)} is invalid`);

  const texts_cdns = [];
  for (let i = 0; i < documents.length; i++) {
    const documents_cdn = documents[i];
    console_log(`documents_cdn = ${JSON.stringify(documents_cdn)}`);

    if (!documents_cdn || !documents_cdn.ticket) throw new Error(`get_json_from_cdn: documents_cdn = ${JSON.stringify(documents_cdn)} is invalid`);
    
    const response_from_cdn = await ctx.app.cdn.get(documents_cdn.ticket, null, 'asBase64');
    if (response_from_cdn == null) throw new Error(`get_json_from_cdn: document = ${JSON.stringify(response_from_cdn)} is invalid`);

    const str = response_from_cdn.data.toString();
    const dataBuffer = Buffer.from(str, 'base64');

    const pdfData = await parsePDF(dataBuffer);
    const extractedTextFields = extractTextFields(pdfData);
    const all_texts = extractedTextFields.join(' ');
    const cleaned_texts = clean_string(all_texts);

    const hasher = initialize_hasher(DEFAULT_HASHER_MODEL);
    const texts_id = "converted_pdf_texts_" + ctx.userId + "_" + hasher.hash(cleaned_texts);

    let texts_cdn = null;

    if (overwrite) {
      await user_db_delete(ctx, texts_id);
    }
    else {
      texts_cdn = await user_db_get(ctx, texts_id);
    }

    if (is_valid(texts_cdn) == false) {
      console_log(`Could not find Texts CDN records for id = ${texts_id} in the DB. Saving to CDN...`);
      texts_cdn = await save_text_to_cdn(ctx, cleaned_texts);
      if (is_valid(texts_cdn) == false) throw new Error(`ERROR: could not save all_texts to cdn`);

      const success = await user_db_put(ctx, texts_cdn, texts_id);
      if (success == false) throw new Error(`ERROR: could not save texts_cdn to db`);
    }
    else {
      console_log(`Found Texts CDN records for id = ${texts_id} in the DB. Skipping saving to CDN...`);
    }
    texts_cdns.push(texts_cdn);
  }

  console.timeEnd("load_pdf_component_processTime");
  return texts_cdns;
}



async function parsePDFData(buffer)
{
    const pdfParser = new PDFParser();

    // Create a promise-based wrapper for the pdfParser.on("pdfParser_dataReady") event
    const onDataReady = () =>
        new Promise((resolve) =>
        {
            pdfParser.on('pdfParser_dataReady', (pdfData) =>
            {
                resolve(pdfData);
            });
        });

    pdfParser.on('pdfParser_dataError', (errData) =>
    {
        throw new Error (`pdfParser_dataError : ${errData}`)
    });

    // Parse the PDF buffer
    pdfParser.parseBuffer(buffer);

    // Wait for the "pdfParser_dataReady" event to be emitted
    const pdfData = await onDataReady();

    return pdfData;
}

async function parsePDF(buffer)
{
    try
    {
        const pdfData = await parsePDFData(buffer);
        return pdfData;
    } catch (error)
    {
        console.error('Error parsing PDF:', error);
        throw error;
    }
}

function extractTextFields(jsonData) 
{
    if (is_valid(jsonData) == false) throw new Error(`extractTextFields: jsonData = ${JSON.stringify(jsonData)} is invalid`);
    const pages = jsonData.Pages;
    if (is_valid(pages) == false) throw new Error(`extractTextFields: pages = ${JSON.stringify(pages)} is invalid`);

    const concatenatedTexts = pages.map((page) => 
    {
        const texts = page.Texts.map((textObj) => decodeURIComponent(textObj.R[0].T));
        return texts.join(' ');
    });

    return concatenatedTexts;
}

const PdfToDocComponent = load_pdf_component.toJSON();
export { PdfToDocComponent, pdfToDoc , parsePDFData, extractTextFields, parsePDF }

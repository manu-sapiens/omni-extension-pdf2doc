// pdftodoc.js
import { OAIBaseComponent, WorkerContext, OmniComponentMacroTypes } from 'mercs_rete';
import { setComponentInputs, setComponentOutputs, setComponentControls } from './utils/components_lib.js';
const NS_ONMI = 'document_processing';

import PDFParser from 'pdf2json';
import { initialize_hasher, DEFAULT_HASHER_MODEL } from './utils/hashers.js'
import { save_text_to_cdn } from './utils/cdn.js';
import { is_valid, clean_string, console_log } from './utils/utils.js';
import { user_db_delete, user_db_get, user_db_put } from './utils/database.js';

import { parsePDF, extractTextFields } from './pdf_processing.js';


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
  { name: 'documents', type: 'array', customSocket: 'documentArray', description: 'PDF Documents to be converted' },
  { name: 'overwrite', type: 'boolean', defaultValue: false, description: 'Overwrite the existing files in the CDN' },
];
load_pdf_component = setComponentInputs(load_pdf_component, inputs);

// Adding outpu(t)
const outputs = [
  { name: 'documents', type: 'array', customSocket: 'documentArray', description: 'The converted documents' },
  { name: 'files', type: 'array', customSocket: 'cdnObjectArray', description: 'The converted files' },
];
load_pdf_component = setComponentOutputs(load_pdf_component, outputs);


// Adding _exec function
load_pdf_component.setMacro(OmniComponentMacroTypes.EXEC, load_pdf_parse);


async function load_pdf_parse(payload, ctx) {
  const { documents, overwrite } = payload;

  let return_value = { result: { "ok": false }, documents: [], files: [] };
  if (documents) {
    const output_cdns = await pdf_to_doc_function(ctx, documents, overwrite);
    return_value = { result: { "ok": true }, documents: output_cdns, files: output_cdns };
  }

  return return_value;
}


// ---------------------------------------------------------------------------
async function pdf_to_doc_function(ctx, documents, overwrite = false) {

  console.time("load_pdf_component_processTime");
  if (is_valid(documents) == false) throw new Error(`load_pdf_component: documents_array = ${JSON.stringify(documents)} is invalid`);

  const pdfParser = new PDFParser();
  pdfParser.on("pdfParser_dataError", errData => console.error(`pdfParser_dataError in ${JSON.stringify(errData)}`));
  pdfParser.on("pdfParser_dataReady", pdfData => {
    console_log(pdfData);
  });

  const texts_cdns = [];
  for (let i = 0; i < documents.length; i++) {
    const documents_cdn = documents[i];
    if ("ticket" in documents_cdn == false) throw new Error(`get_json_from_cdn: documents_cdn = ${JSON.stringify(documents_cdn)} is invalid`);

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

const PdfToDocComponent = load_pdf_component.toJSON();
export { PdfToDocComponent, pdf_to_doc_function };

// pdf_processing.js

import PDFParser from 'pdf2json';
import { is_valid } from './utils/utils.js';

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

export {parsePDFData,extractTextFields, parsePDF }
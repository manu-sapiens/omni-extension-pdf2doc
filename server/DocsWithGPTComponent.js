// TextsToChatGPTComponent
import { OAIBaseComponent, WorkerContext, OmniComponentMacroTypes } from 'mercs_rete';
import { setComponentInputs, setComponentOutputs, setComponentControls } from './components_lib.js';
const NS_ONMI = 'document_processing';

import { read_text_files_function } from "./ReadTextFilesComponent.js";
import { chunk_files_function } from './ChunkFilesComponent.js';
import { query_chunks_function } from './QueryChunksComponent.js';
import { loop_gpt_function } from './LoopGPTComponent.js';
import { console_log } from "./utils.js";


let docs_with_gpt_component = OAIBaseComponent
    .create(NS_ONMI, "docs_with_gpt")
    .fromScratch()
    .set('title', 'Docs with GPT')
    .set('category', 'Text Manipulation')
    .setMethod('X-CUSTOM')
    .setMeta({
        source: {
            "summary": "Feed text document(s) to chatGPT",
            links: {
                "OpenAI Chat GPT function calling": "https://platform.openai.com/docs/guides/gpt/function-calling",
            },
        }
    });

// Adding input(s)
const inputs = [
    { name: 'documents', type: 'array', customSocket: 'documentArray', title: 'Text document(s) to process', defaultValue: [] },
    { name: 'url', type: 'string', title: 'or some Texts to process (text or url(s))', customSocket: 'text' },
    { name: 'usage', type: 'string', defaultValue: 'query_documents', choices: [
        {value:"query_documents", title:"Query Docs", desccription:"Ask a question about your document(s)"}, 
        {value:"run_prompt_on_documents", title:"Run a prompt on docs", description:"Run a prompt on your doc(s) broken into as large chunks as fit in the LLM"}, 
        {value:"run_functions_on_documents", title:"Run Functions on docs", description: "Force the LLM to return a structured output (aka function)"}] },
    { name: 'prompt', type: 'string', title: 'the Prompt, Query or Functions to process', customSocket: 'text' },
    { name: 'temperature', type: 'number', defaultValue: 0 },
    { name: 'model', type: 'string', defaultValue: 'gpt-3.5-turbo-16k', choices: [
        {value:'gpt-3.5-turbo', title:"chatGPT 3 (4k)", description:"gpt 3.5 with ~ 3,000 words context"}, 
        {value:'gpt-3.5-turbo-16k', title:"chatGPT 3 (16k)", description:"gpt 3.5 with ~ 12,000 words context"}, 
        {value:'gpt-4', title:"chatGPT 4 (8k)", description:"gpt 4 with ~ 6,000 words context"},
        {value:'gpt-4-32k', title:"chatGPT 4 (32k)", description: "chat GPT 4 with ~ 24,000 words context"}] },
    { name: 'overwrite', description:"re-ingest the document(s)", type: 'boolean', defaultValue: false },
];
docs_with_gpt_component = setComponentInputs(docs_with_gpt_component, inputs);

// Adding control(s)
const controls = [
    { name: "documents", placeholder: "AlpineCodeMirrorComponent" },
];
docs_with_gpt_component = setComponentControls(docs_with_gpt_component, controls);

// Adding outpu(t)
const outputs = [
    { name: 'answer', type: 'string', customSocket: 'text', description: 'The answer to the query or prompt', title: 'Answer' },
    { name: 'documents', type: 'array', customSocket: 'documentArray', description: 'The documents containing the results' },
    { name: 'files', type: 'array', customSocket: 'cdnObjectArray', description: 'The files containing the results' },
];
docs_with_gpt_component = setComponentOutputs(docs_with_gpt_component, outputs);


// Adding _exec function
docs_with_gpt_component.setMacro(OmniComponentMacroTypes.EXEC, read_text_files_parse);


async function read_text_files_parse(payload, ctx) {
    console_log(`[TextsToChatGPTComponent]: payload = ${JSON.stringify(payload)}`);


    const documents = payload.documents;
    const url = payload.url;
    const usage = payload.usage;
    const prompt = payload.prompt;
    const temperature = payload.temperature;
    const model = payload.model;
    const overwrite = payload.overwrite;

    const response = await docs_with_gpt_function(ctx, documents, url, usage, prompt, temperature, model, overwrite)
    const response_cdn = response.response_cdn;
    const response_answer = response.answer;

    const return_value = { result: { "ok": true }, answer: response_answer, documents: [response_cdn], files: [response_cdn] };
    console_log(`[TextsToChatGPTComponent]: return_value = ${JSON.stringify(return_value)}`);
    return return_value;

}


    async function docs_with_gpt_function(ctx, passed_documents_cdns, url, usage, prompt, temperature, model, overwrite) {
        let passed_documents_are_valid = (passed_documents_cdns != null && passed_documents_cdns != undefined && Array.isArray(passed_documents_cdns) && passed_documents_cdns.length > 0);
        if (passed_documents_are_valid) {
            console_log(`read #${passed_documents_cdns.lentgh} from "documents" input, passed_documents_cdns = ${JSON.stringify(passed_documents_cdns)}`);
        }
        else {
            console_log(`documents = ${passed_documents_cdns} is invalid`);
            passed_documents_cdns = await read_text_files_function(ctx, passed_documents_cdns);
            passed_documents_are_valid = (passed_documents_cdns != null && passed_documents_cdns != undefined && Array.isArray(passed_documents_cdns) && passed_documents_cdns.length > 0);
            if (passed_documents_are_valid) {
                console_log(`RECOVERED  #${passed_documents_cdns.lentgh} from "documents" input, RECOVERED passed_documents = ${JSON.stringify(passed_documents_cdns)}`);

            }
        }

        let read_documents_cdns = await read_text_files_function(ctx, url);
        const read_documents_are_valid = (read_documents_cdns != null && read_documents_cdns != undefined && Array.isArray(read_documents_cdns) && read_documents_cdns.length > 0);
        if (read_documents_are_valid) {
            console_log(`type of read_documents_cdns = ${typeof read_documents_cdns}, read #${read_documents_cdns.length} from "read_documents_cdns", read_documents_cdns = ${JSON.stringify(read_documents_cdns)}`);
        }
        else {
            console_log(`documents = ${read_documents_cdns} is invalid`);
        }


        // TBD read doc types and process documents to turn them into text.
        // TBD for now, we assume they all are text files
        if (passed_documents_are_valid && read_documents_are_valid) read_documents_cdns = passed_documents_cdns.concat(read_documents_cdns);
        if (passed_documents_are_valid && !read_documents_are_valid) read_documents_cdns = passed_documents_cdns;
        if (!passed_documents_are_valid && !read_documents_are_valid) throw new Error(`no texts passed as text, url or documents`);

        if (read_documents_are_valid) {
            console_log(`2] read #${read_documents_cdns.length} from "read_documents_cdns"`);
            console_log(`2] read_documents_cdns = ${JSON.stringify(read_documents_cdns)}`);
        }
        else {
            console_log(`2] documents = ${read_documents_cdns} is invalid`);
        }

        const chunked_documents_cdns = await chunk_files_function(ctx, read_documents_cdns, overwrite);
        let return_value = { result: { "ok": false }, answers: [], documents: [], files: [] };
        let response_cdn = null;
        let answer = "";
        let default_instruction = "You are a helpful bot answering the user with their question to the best of your ability.";

        if (usage == "query_documents") {
            if (prompt === null || prompt === undefined || prompt.length == 0) throw new Error("No query specified in [prompt] field");
            const response = await query_chunks_function(ctx, chunked_documents_cdns, prompt, model);
            response_cdn = response.cdn;
            answer = response.answer;
        }
        else if (usage == "run_prompt_on_documents") {
            if (prompt === null || prompt === undefined || prompt.length == 0) throw new Error("No prompt specified in [prompt] field");

            const instruction = default_instruction + "\n" + prompt;
            const response = await loop_gpt_function(ctx, chunked_documents_cdns, instruction, [], model, temperature);
            response_cdn = response.cdn;
            answer = response.answer;
        }
        else if (usage == "run_functions_on_documents") {
            const instruction = "You are a helpful bot answering the user with their question to the best of your ability using the provided functions.";

            let llm_functions = null;
            try {
                llm_functions = JSON.parse(prompt);
                console_log(`[TextsToChatGPTComponent]: string -> object: llm_functions = ${JSON.stringify(llm_functions)}`);
            }
            catch
            {
                throw new Error(`Invalid JSON in [Prompt] field: ${prompt}`);
            }
            if (llm_functions === null || llm_functions === undefined || llm_functions.length == 0) throw new Error("No valid functions specified in [prompt] field");
            if (!Array.isArray(llm_functions)) {
                llm_functions = [llm_functions];
                console_log(`[TextsToChatGPTComponent]: object -> array: llm_functions = ${JSON.stringify(llm_functions)}`);
            }

            const response = await loop_gpt_function(ctx, chunked_documents_cdns, instruction, llm_functions, model, temperature);

            response_cdn = response.cdn;
            answer = response.answer;
        }
        else {
            throw new Error(`Unknown usage: ${usage}`);
        }

        console_log(`[TextsToChatGPTComponent]: return_value = ${JSON.stringify(return_value)}`);
        return { response_cdn, answer }
    }

    const DocsWithGPTComponent = docs_with_gpt_component.toJSON();
    export { DocsWithGPTComponent, docs_with_gpt_function };
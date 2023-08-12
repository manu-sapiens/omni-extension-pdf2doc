// cdn.js

import { is_valid, console_log, clean_string } from './utils.js';
import { user_db_put, user_db_get, user_db_delete } from './database.js';
async function save_text_to_cdn(ctx, text)
{
    const buffer = Buffer.from(text);
    const cdn_response = await ctx.app.cdn.putTemp(buffer, { mimeType: 'text/plain; charset=utf-8', userId: ctx.userId });
    console_log(`cdn_response = ${JSON.stringify(cdn_response)}`);

    return cdn_response;
}

async function save_json_to_cdn(ctx, json)
{
    const responses_string = JSON.stringify(json, null, 2).trim();
    const buffer = Buffer.from(responses_string);
    const cdn_response = await ctx.app.cdn.putTemp(buffer, { mimeType: 'text/plain; charset=utf-8', userId: ctx.userId });
    console_log(`cdn_response = ${JSON.stringify(cdn_response)}`);

    return cdn_response;
}


async function get_json_from_cdn(ctx, cdn_response)
{
    if ("ticket" in cdn_response == false) throw new Error(`get_json_from_cdn: cdn_response = ${JSON.stringify(cdn_response)} is invalid`);

    const response_from_cdn = await ctx.app.cdn.get(cdn_response.ticket, null, 'asBase64');
    if (response_from_cdn == null) throw new Error(`get_json_from_cdn: document = ${JSON.stringify(response_from_cdn)} is invalid`);

    let json = null;
    try
    {
        const str = response_from_cdn.data.toString();
        const buffer = Buffer.from(str, 'base64');
        const json_string = buffer.toString('utf8');

        json = JSON.parse(json_string);

    }
    catch (e)
    {
        throw new Error(`get_json_from_cdn: error converting response_from_cdn.data to utf-8, error = ${e}`);
    }

    return json;
}

async function save_json_to_cdn_as_buffer(ctx, json)
{
    const responses_string = JSON.stringify(json, null, 2).trim();
    const buffer = Buffer.from(responses_string);
    const cdn_response = await ctx.app.cdn.putTemp(buffer, { userId: ctx.userId });
    console_log(`cdn_response = ${JSON.stringify(cdn_response)}`);
    return cdn_response;
}

async function get_chunks_from_cdn(ctx, chunks_cdn)
{
    const chunks_json = await get_json_from_cdn(ctx, chunks_cdn);
    const chunks = chunks_json.chunks;
    if (is_valid(chunks) == false) throw new Error(`[get_chunks_from_cdn] Error getting chunks from database with cdn= ${JSON.stringify(chunks_cdn)}`);

    return chunks;
}

async function get_cached_cdn(ctx, object_id, overwrite = false)
{
    let cdn = null;
    if (overwrite)
    {
        await user_db_delete(ctx, object_id);
    }
    else
    {
        cdn = await user_db_get(ctx, object_id);
    }
    console_log(`[get_cached_cdn] cdn = ${JSON.stringify(cdn)}, typeof cdn = ${typeof cdn}`);

    return cdn;
}

async function save_chunks_cdn_to_db(ctx, chunks_cdn, chunks_id)
{
    const success = await user_db_put(ctx, chunks_cdn, chunks_id);
    if (success == false) throw new Error(`ERROR: could not save chunks_cdn to db`);
    return success;
}


// return an array of texts gathered from all the documents (1 per document)
async function gather_all_texts_from_documents(ctx, documents)
{
    if (is_valid(documents) == false) throw new Error(`ERROR: documents is invalid. documents = ${JSON.stringify(documents)}`);

    let texts = [];
    for (let i = 0; i < documents.length; i++) 
    {

        const document_cdn = documents[i];
        //TBD: convert docs files to text when necessary
        try
        {
            const document = await ctx.app.cdn.get(document_cdn.ticket);
            //const mimeType = document_cdn.mimeType || 'text/plain; charset=utf-8';
            const text = document.data.toString() || "";
            if (is_valid(text) == false) 
            {
                console_log(`WARNING: text is null or undefined or empty for document = ${JSON.stringify(document)}`);
                continue;
            }

            const clearn_text = clean_string(text);
            texts.push(clearn_text);
        }
        catch (error)
        {
            console_log(`WARNING: document ${JSON.stringify(document_cdn)} cannot be retrieved from cdn`);
        }
    }

    if (is_valid(texts) == false) throw new Error(`ERROR: texts is invalid`);

    return texts;
}

export {save_text_to_cdn, save_json_to_cdn, get_json_from_cdn, save_json_to_cdn_as_buffer, get_chunks_from_cdn, get_cached_cdn, save_chunks_cdn_to_db, gather_all_texts_from_documents}
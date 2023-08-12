// hashers.js

import { SHA256Hasher } from "./hashersSHA256.js";
import { console_log, is_valid } from "./utils.js";

const HASHER_MODEL_SHA256 = "SHA256";
const DEFAULT_HASHER_MODEL = HASHER_MODEL_SHA256;


function compute_chunk_id(ctx, text, vectorstore_name, hasher)
{
    const user = ctx.userId;
    const hash = hasher.hash(text);
    const chunk_id = `chunk_${vectorstore_name}_${user}_${hash}`;

    console_log(`Computed chunk_id : ${chunk_id} for text length: ${text.length}, vectorstorename: ${vectorstore_name}, hash: ${hash}, user = ${user}, start = ${text.slice(0, 256)}, end = ${text.slice(-256)}`);

    return chunk_id;
}


function compute_document_id(ctx, texts, vectorstore_name, hasher)
{
    // get the key so that we can pass it around
    if (is_valid(texts) == false) throw new Error(`ERROR: texts is invalid`);

    const user = ctx.userId;
    const document_hash = hasher.hash_list(texts);
    const document_id = `doc_${vectorstore_name}_${user}_${document_hash}`;

    return document_id;
}

function initialize_hasher(hasher_model = DEFAULT_HASHER_MODEL)
{

    let hasher = null;
    if (hasher_model == HASHER_MODEL_SHA256) hasher = new SHA256Hasher();
    else  
    {
        throw new Error(`initialize_hasher: Unknown hasher model: ${hasher_model}`);
    }
    // TBD: more hasher choices here
    try{

        const validate_text = "this and that"
        const validate_hash1 = hasher.hash(validate_text);
        const validate_hash2 = hasher.hash(validate_text);

        if (validate_hash1 != validate_hash2) throw new Error(`hasher: ${hasher_model} is not stable`);

    }
    catch (e)
    {
        
        throw new Error(`get_hasher: Failed to initialize hasher_model ${hasher_model} with error: ${e}`);
    }
    return hasher;
}


export { compute_chunk_id, compute_document_id, initialize_hasher}
export { DEFAULT_HASHER_MODEL }
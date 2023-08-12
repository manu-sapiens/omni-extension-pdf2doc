// utils.js
import { omnilog } from 'mercs_shared'

let VERBOSE = true;

function printObject(obj, text = "") {
    if (text != "") console.log(text);
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console_log(`Key: ${key}, Value: ${obj[key]}`);
      }
    }
  }

function is_valid(value)
{
    if (value === null || value === undefined)
    {
        return false;
    }

    if (Array.isArray(value) && value.length === 0)
    {
        return false;
    }

    if (typeof value === 'object' && Object.keys(value).length === 0)
    {
        return false;
    }

    if (typeof value === 'string' && value.trim() === '')
    {
        return false;
    }

    return true;
}

function clean_string(original)
{
    if (is_valid(original) == false)
    {
        return "";
    }

    let text = sanitizeString(original);

    // Replace newline characters with a space
    text = text.replace(/\n+/g, ' ');

    // Replace multiple spaces with a single space
    text = text.replace(/ +/g, ' ');

    return text;

}

function sanitizeString(original, use_escape_character = false)
{
    return use_escape_character
        ? original.replace(/'/g, "\\'").replace(/"/g, '\\"')
        : original.replace(/'/g, "‘").replace(/"/g, '“');
}


function sanitizeJSON(jsonData)
{

    if (!is_valid(jsonData)) return null;

    if (typeof jsonData === 'string')
    {
        return sanitizeString(jsonData);
    }

    if (typeof jsonData === 'object')
    {
        if (Array.isArray(jsonData))
        {
            const new_json_array = [];
            for (let i = 0; i < jsonData.length; i++)
            {
                const data = jsonData[i];
                const sanetized_data = sanitizeJSON(data);
                if (is_valid(sanetized_data)) new_json_array.push(sanetized_data);
            }
            return new_json_array;
        }
        else
        {
            let new_json = {};
            for (const key in jsonData) 
            {
                if (jsonData.hasOwnProperty(key)) 
                {
                    const value = jsonData[key];
                    if (is_valid(value))
                    {
                        const new_value = sanitizeJSON(value);
                        if (is_valid(new_value)) new_json[key] = new_value;
                    }
                }
            }
            return new_json;
        }
    }

    return jsonData;
}

function delay(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pauseForSeconds(seconds)
{
    console_log('Before pause');

    await delay(seconds * 1000); // Convert seconds to milliseconds

    console_log('After pause');
}

function console_log(...args)
{
    if (VERBOSE == true)
    {
        //omnilog.log("------ extension: document_processing -------");
        omnilog.log(...args);
        //omnilog.log("\n");
    }
}

function combineStringsWithoutOverlap(str1, str2)
{
    // Find the maximum possible overlap between the two strings
    let overlap = 0;
    for (let i = 1; i <= Math.min(str1.length, str2.length); i++)
    {
        if (str1.endsWith(str2.substring(0, i)))
        {
            overlap = i;
        }
    }

    // Combine the strings and remove the overlapping portion from the second string
    return str1 + str2.substring(overlap);
}



function rebuildToTicketObjectsIfNeeded(data) 
{
    const documents = [];

    // Check if the data is an array of tickets

    if (Array.isArray(data) && data.every(item => typeof item === 'object' && item !== null && item.ticket))
    {
        return data; // Already in the ticket format, return as is.
    }

    // Check if the data is an array of URLs pointing to fids
    if (Array.isArray(data) && data.every(item => typeof item === 'string'))
    {
        // Rebuild URLs into ticket objects

        for (let i = 0; i < data.length; i++)
        {
            const url = data[i];
            const fidRegex = /\/fid\/(.+)/; // Regular expression to extract the fid part after "/fid/"
            const match = url.match(fidRegex);

            if (match)
            {
                const baseurl = url.substring(0, match.index); // Extract the base URL before "/fid/"
                const fid = match[1]; // Extract the fid part from the regex match
                const filename = `${fid}.txt`;

                const rebuilt_cdn = {
                    ticket: {
                        fid: fid,
                        count: 1,
                        url: baseurl,
                        publicUrl: baseurl,
                    },
                    fileName: filename,
                    size: 0,
                    url: url,
                    furl: `fid://${filename}`,
                    mimeType: "text/plain; charset=utf-8",
                    expires: 0,
                    meta:
                    {
                        created: 0
                    }
                };
                // we recerate a cdn object, knowing that most likely only the ticket will be used
                documents.push(rebuilt_cdn);
                console_log(`rebuild url = ${url} into rebuilt_cdn = ${JSON.stringify(rebuilt_cdn)}`);

            }
        }
    }
    return documents;
}


function parse_text_to_array(candidate_text)
{
    var texts = [];
    if (is_valid(candidate_text) == false) return texts;
    try
    {
        const parsedArray = JSON.parse(candidate_text);
        if (Array.isArray(parsedArray) && parsedArray.every(elem => typeof elem === 'string'))
        {
            texts = parsedArray;
        }
    }
    catch (error)
    {
        texts = [candidate_text];
    }

    console_log(`parse_text_to_array: texts = ${JSON.stringify(texts)}`);
    if (texts.length == 0) return null;
    if (texts.length == 1 && texts[0] == "") return [];

    return texts;
}


export {is_valid, clean_string, sanitizeJSON, console_log, combineStringsWithoutOverlap, rebuildToTicketObjectsIfNeeded, parse_text_to_array, pauseForSeconds, printObject }
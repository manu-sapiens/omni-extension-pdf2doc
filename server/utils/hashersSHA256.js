// hashersSHA256.js

import { Hasher } from './hasher.js'
import { createHash } from "crypto";

class SHA256Hasher extends Hasher
{
    constructor()
    {
        super();
    }

    hash(text)
    {

        if (typeof text === "string")
        {

            const hasher = createHash('sha256');
            hasher.update(text);
            return hasher.digest('hex');
        }
        throw new Error('hash() only accepts a string as input');
    }

    hash_list(texts)
    {
        if (typeof texts === "string")
        {
            return this.hash(texts);
        }

        if (Array.isArray(texts))
        {
            let sum_of_hashes = "";
            for (let i = 0; i < texts.length; i++)
            {
                const text = texts[i];
                sum_of_hashes += this.hash(text);
            }
            return this.hash(sum_of_hashes);
        }

        throw new Error('hash_list only accepts a string and a list of strings as input');
    }
}

export { SHA256Hasher }
/**
 * Copyright (c) 2023 MERCENARIES.AI PTE. LTD.
 * All rights reserved.
 */

// extension.js
import { PdfToDocComponent } from "./PdfToDocComponent.js";
let components = [PdfToDocComponent];
function CreateComponents() {
    return {
        blocks: components,
        patches: []
    };
}
export default { createComponents: CreateComponents };

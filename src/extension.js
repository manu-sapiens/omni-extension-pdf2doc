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

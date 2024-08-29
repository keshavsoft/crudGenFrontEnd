import { StartFunc as StartFuncMultipleQrCodeButtonId } from "./MultipleQrCodeButtonId/EntryFile.js";
import { StartFunc as StartFuncMultipleQrCodeButtonId1 } from "./MultipleQrCodeButtonId1/EntryFile.js";
import { StartFunc as StartFuncMultipleQrCodeButtonId2 } from "./MultipleQrCodeButtonId2/EntryFile.js";
import { StartFunc as StartFuncMultipleQrCodeButtonId3 } from "./MultipleQrCodeButtonId3/EntryFile.js";

const StartFunc = (row, $element, field) => {
    if (field === 6) {
        StartFuncMultipleQrCodeButtonId({ inRowpk: row.pk }).then();
    };
    if (field === 7) {
        StartFuncMultipleQrCodeButtonId1({ inRowpk: row.pk }).then();
    };
    if (field === 8) {
        StartFuncMultipleQrCodeButtonId2({ inRowpk: row.pk }).then();
    };
    if (field === 9) {
        StartFuncMultipleQrCodeButtonId3({ inRowpk: row.pk }).then();
    };
};
export { StartFunc };
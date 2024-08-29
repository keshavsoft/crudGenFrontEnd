// import { StartFunc as StartFkuncButtonClickFunc } from "./QRGenerate/2-ButtonClickFunc.js";
import { StartFunc as StartFuncButtonClickFunc } from "./GenerateQrCodeButtonId/ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {
    console.log(field);
    if (field === 7) {
        StartFuncButtonClickFunc({ inRowData: row });
    };
};
export { StartFunc };
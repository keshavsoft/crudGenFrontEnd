import { StartFunc as StartFuncButtonSaveId } from "./ButtonSaveId/1-ClickAssign.js";
import { StartFunc as StartFuncInputPkId } from "./InputPkId/EntryFile.js";

let StartFunc = () => {
    StartFuncInputPkId();
    StartFuncButtonSaveId();
};

export { StartFunc };
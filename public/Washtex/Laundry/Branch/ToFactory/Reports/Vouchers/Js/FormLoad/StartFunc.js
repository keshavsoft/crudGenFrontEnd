import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBSTables } from "./BuildBSTables/EntryFile.js";

const StartFunc = () => {
    StartFuncBuildBSTables();
    StartFuncFromUrlParams();
    StartFuncAddListeners();
};

export { StartFunc };

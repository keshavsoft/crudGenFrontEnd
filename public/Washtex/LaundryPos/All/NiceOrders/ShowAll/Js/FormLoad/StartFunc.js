import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncAddlisteners } from "./ListenerFuncs/StartFunc.js";
import { StartFunc as StartFuncShowOnDate } from "./ShowOnDate.js";

const StartFunc = () => {
    StartFuncShowOnDate();
    StartFuncFromUrlParams();
    StartFuncAddlisteners();
};

export { StartFunc };

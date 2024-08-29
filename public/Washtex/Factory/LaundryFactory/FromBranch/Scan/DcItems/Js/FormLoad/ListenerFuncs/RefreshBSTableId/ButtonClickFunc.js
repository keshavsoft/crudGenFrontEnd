import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncDCDetailsFetchFuncs } from "./DCDetailsFetchFuncs/Entry.js";
import { StartFunc as StartFuncFactoryScanFetchFuncs } from "./FactoryScanFetchFuncs/Entry.js";

let StartFunc = () => {
    if (StartFuncCheckFunc()) {
        
        StartFuncDCDetailsFetchFuncs();
        StartFuncFactoryScanFetchFuncs();
    }
};

export { StartFunc };

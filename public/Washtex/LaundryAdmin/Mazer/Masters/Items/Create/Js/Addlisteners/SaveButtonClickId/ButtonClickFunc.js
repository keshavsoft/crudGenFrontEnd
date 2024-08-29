import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = () => {
    let LocalCreateItemButtonId = document.getElementById("CreateItemButtonId");
    LocalCreateItemButtonId.addEventListener("click", LocalClickFunc)
};

const LocalClickFunc = () => {
    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs().then();
    };
}

export { StartFunc };

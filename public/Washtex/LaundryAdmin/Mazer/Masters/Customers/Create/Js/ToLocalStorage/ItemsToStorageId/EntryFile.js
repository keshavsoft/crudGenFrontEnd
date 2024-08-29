import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";

let StartFunc = () => {
    let jVarLocalMasterButtonId = "ItemsToStorageId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalMasterButtonId);

    // jVarLocalHtmlId.addEventListener("click", StartFuncToLocalStorage);
    jVarLocalHtmlId.addEventListener("click",StartFuncGetFetch);
};

StartFunc();
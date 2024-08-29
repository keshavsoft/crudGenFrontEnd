import { StartFunc as StartFuncFuncToRun } from "./FetchFromFuncs/Entry.js";

let StartFunc = () => {
    let jVarLocalLoginButtonId = "Form";
    let jVarLocalHtmlId = document.getElementById(jVarLocalLoginButtonId);

    jVarLocalHtmlId.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc }
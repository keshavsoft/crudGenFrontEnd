import ConfigJson from "../../../../Config.json" with { type: "json" };
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let LocalFuncFetchHeaders = StartFuncFetchHeaders()

    let jVarLocalFetchUrl = `/bin/${LocalroutePath}/${jVarLocalBranchName}/FilterDataFrombody`;
    let response = await fetch(jVarLocalFetchUrl, LocalFuncFetchHeaders);
    let data = await response.json();

    return await data;
};

export { StartFunc };
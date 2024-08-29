import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    //console.log(jVarLocalFetchHeaders);
    // let jVarLocalFetchUrl = `/${LocalroutePath}/Transactions/${jVarLocalBranchName}/DataOnly`;
    let jVarLocalFetchUrl = `/${LocalroutePath}/Transactions/${jVarLocalBranchName}/FilterDataFrombody`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    
    return await response;
};

export { StartFunc };


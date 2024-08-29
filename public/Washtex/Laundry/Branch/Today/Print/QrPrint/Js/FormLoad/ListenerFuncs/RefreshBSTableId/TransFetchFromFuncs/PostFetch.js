import ConfigJson from "../../../../Config.json" with { type: "json" };
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let LocalBodyObject = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Orders/Today/WithQrCode`;
    // let jVarLocalFetchUrl = `/bin/${LocalroutePath}/${jVarLocalBranchName}/FilterDataFrombody`
    let response = await fetch(jVarLocalFetchUrl,LocalBodyObject);
    let data = await response.json();

    return await data;
};

export { StartFunc };
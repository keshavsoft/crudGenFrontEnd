import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let LocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/bin/QrCodes/Generate/FilterDataFrombody`;
    let response = await fetch(jVarLocalFetchUrl, LocalFetchHeaders);
    let data = await response.json();

    return await data;
};


export { StartFunc };
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let LocalFuncFetchHeaders = StartFuncFetchHeaders()

    let jVarLocalFetchUrl = `/bin/QrCodes/Generate/FilterDataFrombody`;
    let response = await fetch(jVarLocalFetchUrl, LocalFuncFetchHeaders);

    if (response.status === 200 === false) {
        return await [];
    };

    return await response.json();
};
export { StartFunc };
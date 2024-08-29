import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    // let jVarLocalFetchUrl = `/bin/Factory/QrCodeDetails/WithKeysCheck`;
    let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Branch/Create/ToFactoryScan`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    // let data = await response.json();

    return await response;
};

export { StartFunc };
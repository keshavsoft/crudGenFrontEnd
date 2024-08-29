import { StartFunc as StartFuncRowpk } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalRowPk = StartFuncRowpk();
    let jVarLocalFetchUrl = `/bin/Transactions/ANR/RowData/pk/${jVarLocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    return await response;

    // let jVarLocalResponse = await response.json();
    // return await jVarLocalResponse;

};

export { StartFunc };
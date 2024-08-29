import { StartFunc as StartFuncRowpk } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    return await LocalFunc();
    // return true;
};

let LocalFunc = async () => {
    let jVarLocalRowPk = StartFuncRowpk();
    let jVarLocalFetchUrl = `/bin/Factory/FactoryScan/RowData/QrCodeId/${jVarLocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    if (response.status === 200) {
        return true;
    } else {
        swal.fire({ icon: "error", text: "No Data" })
        return false;
    }
};

export { StartFunc };
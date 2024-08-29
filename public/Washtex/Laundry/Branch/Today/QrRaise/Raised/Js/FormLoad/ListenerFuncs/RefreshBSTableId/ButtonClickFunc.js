import { StartFunc as StartFuncTransactionsFetch } from "./TransactionsFetch/PostFetch.js";
// import { StartFunc as StartFuncQrCodesData } from "./FetchFromQrCodes/PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncTransactionsFetch();
    // let jVarLocalQrCodeData = await StartFuncQrCodesData();

    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
        };
    };
};

export { StartFunc }
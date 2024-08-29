import { StartFunc as StartFuncFetchFuncs } from "./TransFetchFromFuncs/PostFetch.js";
// import { StartFunc as StartFuncQrCodesData } from "./QrFetchFromFuncs/PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    // let jVarLocalQrCodeData = await StartFuncQrCodesData();

    if (jVarLocalDataNeeded !== null) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
    };
};

export { StartFunc }
import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalScanedQrCode = await StartFuncGetFetch();

    StartFuncAfterFetch({ ScanedQrCodeData: jVarLocalScanedQrCode });
};

export { StartFunc }
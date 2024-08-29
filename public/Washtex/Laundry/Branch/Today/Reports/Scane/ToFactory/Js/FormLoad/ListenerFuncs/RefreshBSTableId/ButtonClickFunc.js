import { StartFunc as StartFuncQrCodesData } from "./FetchFromQrCodes/PostFetch.js";
import { StartFunc as StartFuncFactoryFetchFetch } from "./FactoryFetch/PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let [a, b] = await Promise.all([StartFuncQrCodesData(), StartFuncFactoryFetchFetch()]);
        let jVarLocalQrCode = a;
        let jVarLocalScanedQrCode = b;
        StartFuncAfterFetch({ inQrCodeData: jVarLocalQrCode, ScanedQrCodeData: jVarLocalScanedQrCode });
    };

export { StartFunc }
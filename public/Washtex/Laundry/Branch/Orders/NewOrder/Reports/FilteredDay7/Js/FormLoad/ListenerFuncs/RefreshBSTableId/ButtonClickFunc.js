import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFuncs } from "./GenerateFetcFunc/PostFetch.js";
import { StartFunc as StartFuncGetFetch } from "./QrCodeDetailsFetchFunc/GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    if (StartFuncCheckFunc()) {
        let [a, b] = await Promise.all([StartFuncFetchFuncs(), StartFuncGetFetch()]);

        let jVarLocalQrCode = a;
        let jVarLocalScanedQrCode = b;
        StartFuncAfterFetch({ inQrCodeData: jVarLocalQrCode, ScanedQrCodeData: jVarLocalScanedQrCode });

    };
};

export { StartFunc };

import { StartFunc as StartFuncLoginCheck } from "/Laundry/Js/LoginModal/EntryFile.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";


const StartFunc = async () => {
    let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFuncShowOnDom });

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        StartFuncShowOnDom({}).then();
    };
};

StartFunc();
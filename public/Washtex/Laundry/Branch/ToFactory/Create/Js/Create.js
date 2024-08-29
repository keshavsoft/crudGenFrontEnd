import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncformLoad } from "./formLoad/pullTableData/StartFunc.js";
import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";
import { StartFunc as StartFuncLoginCheck } from "/Laundry/Js/LoginModal/EntryFile.js";


const StartFunc = async () => {
    let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFuncformLoad });
    if (jVarLocalFromAdmin) {

        StartFuncFormLoadBeforeAdmin();

        StartFuncformLoad();

        StartFuncButtonClickFunc();
    }
};

StartFunc();
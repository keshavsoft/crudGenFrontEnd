import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as StartFuncOnFormLoad } from "./FormLoad/EntryFile.js";
import { StartFunc as StartFuncLoginCheck } from "/Laundry/Js/LoginModal/EntryFile.js";

const StartFunc = async () => {
    StartFuncAddListeners();

    let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFuncOnFormLoad });

    if (jVarLocalFromAdmin === false) {
        return await false;
    };

    StartFuncOnFormLoad();
};

StartFunc().then();
import { StartFunc as StartFuncForAccountNames } from "./ForDataList/AccountNames/GetFetch.js";
import {StartFunc as StartFuncForMasterItems} from "./MasterItems.js"
const StartFunc = () => {
    StartFuncForAccountNames();
    StartFuncForMasterItems();
};

export { StartFunc };

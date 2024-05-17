import { StartFunc as StartFuncForAccountNames } from "./ForDataList/AccountNames/GetFetch.js";
import {StartFunc as StartFuncForSuggestedItems} from "./SuggestedItems.js"
const StartFunc = () => {
    StartFuncForAccountNames();
    StartFuncForSuggestedItems();
};

export { StartFunc };

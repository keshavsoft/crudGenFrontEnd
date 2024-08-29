import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";
import { StartFunc as ShowMobileList  } from "./ShowMobileList.js";
import { StartFunc as ShowCustomerList  } from "./ShowCustomerList.js";

const StartFunc = () => {
    StartFuncButtonClickFunc();
    ShowMobileList();
    ShowCustomerList();
};

StartFunc();
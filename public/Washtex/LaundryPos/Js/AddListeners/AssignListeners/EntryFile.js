import { StartFunc as ToLaundryPos } from "../ToLaundryPos/EntryFile.js";
import { StartFunc as ToNewOrder } from "../ToNewOrder/EntryFile.js";

const StartFunc = ()=>{
        let jVarLocalBruchSelectButtonId = document.getElementById('BruchSelectButtonId');

        if (jVarLocalBruchSelectButtonId === null === false) {
            jVarLocalBruchSelectButtonId.addEventListener("click", ToLaundryPos)
        };
        
        let jVarLocalBranchOrderId = document.getElementById('BranchOrderId');

        if (jVarLocalBranchOrderId === null === false) {
            jVarLocalBranchOrderId.addEventListener("click", ToNewOrder)
        };
    };

export {StartFunc}
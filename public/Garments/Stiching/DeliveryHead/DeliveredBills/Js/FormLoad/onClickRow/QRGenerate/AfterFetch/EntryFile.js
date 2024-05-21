import { StartFunc as StartFuncPrintHeader } from "./PrintHeader.js";
import { StartFunc as StartFuncPrintBody } from "./PrintBody.js";

let StartFunc = async ({ inFromFetch, inRowData }) => {

    let jVarLocalFilterData = inFromFetch.filter(element => {
        let LocalFetchDateTime = JLocalDateFunc({ inDate: element.DateTime });
        let LocalCheckDateTime = JLocalDateFunc({ inDate: inRowData.DateTime });
        if (LocalFetchDateTime === LocalCheckDateTime) {
            return element;
        };
    });
    StartFuncPrintHeader({ InData: inRowData });
    StartFuncPrintBody({ InData: jVarLocalFilterData });
    $('#showModalId').modal('show');
};

const JLocalDateFunc = ({ inDate }) => {
    return new Date(inDate).toLocaleString("en-GB", { timeZone: "UTC", }).replace(",", "");
};

export { StartFunc };

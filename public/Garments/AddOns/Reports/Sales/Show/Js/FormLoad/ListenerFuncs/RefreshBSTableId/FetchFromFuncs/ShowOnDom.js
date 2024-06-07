import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncBills } from "./Promises/ShowVoucherDetails/PostFetch.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncShowPos } from "./Promises/ShowPos/PostFetch.js";

let StartFunc = async () => {
    const [a, b, c] = await Promise.all([StartFuncItemDetails(), StartFuncBills(), StartFuncShowPos()]);

    let jVarLocalDcData = a;
    let jVarLocalSalePOS = [...b, ...c];

    let jVarLocalShowOnDomData = jFLocalCheck({ QrCodeData: jVarLocalDcData, SaleDataPOS: jVarLocalSalePOS })

    StartFuncAfterFetch({ inDataToShow: jVarLocalShowOnDomData });
};

const jFLocalCheck = ({ QrCodeData, SaleDataPOS }) => {

    let localReturnArray = [];

    localReturnArray = QrCodeData.map((element) => {
        SaleDataPOS.map(e => {
            if (element.BillPk == e.pk) {
                element.PaymentMode = e.PaymentMode
                element.PaymentMode = e.PaymentMode
                element.salePOSDateTime = e.Date
                let OnlyYear = new Date(element.salePOSDateTime);
                let OnlyMonth = new Date(element.salePOSDateTime);
                element.PosOnlyYear = OnlyYear.getFullYear();
                element.PosOnlyMonth = OnlyMonth.getMonth() + 1;
            };
            return element;
        });

        return element;
    });


    return localReturnArray;

};

export { StartFunc }
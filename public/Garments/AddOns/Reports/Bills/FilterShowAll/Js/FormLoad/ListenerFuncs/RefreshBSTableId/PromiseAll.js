import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncShowPos } from "./Promises/ShowPos/PostFetch.js";

let StartFunc = async () => {
    const [a, b] = await Promise.all([StartFuncItemDetails(), StartFuncShowPos()]);

    let jVarLocalDcData = a;
    let jVarLocalSalePOS = b;

    let jVarLocalShowOnDomData = jFLocalCheck({ QrCodeData: jVarLocalDcData, SaleDataPOS: jVarLocalSalePOS })

    StartFuncAfterFetch({ inDataToShow: jVarLocalShowOnDomData });
};

let jFLocalCheck = ({ SaleDataPOS, QrCodeData }) => {
    let jVarLocalPos = SaleDataPOS;
    let jVarLocalBillsQrCode = QrCodeData;

    let jVarLocalReturnObject = jVarLocalPos.map(loopPos => {
        loopPos.AggValues = {};
        let SaleItemData = jVarLocalBillsQrCode.filter(e => e.BillPk == loopPos.pk);
        loopPos.AggValues.DisRate =  SaleItemData.map(el => el.DisRate).reduce((a, b) => a + b, 0);
        loopPos.AggValues.UnitRate =  SaleItemData.map(el => el.UnitRate).reduce((a, b) => a + b, 0);
        loopPos.AggValues.GrossAmout =  SaleItemData.map(el => el.GrossAmout).reduce((a, b) => a + b, 0);
        loopPos.AggValues.DisPercentage = SaleItemData.map(el => el.DisPercentage).reduce((a, b) => a + b, 0);
        return loopPos;
    });

    return jVarLocalReturnObject;
};

const jFLocalCheck1 = ({ QrCodeData, SaleDataPOS }) => {

    let localReturnArray = [];

    localReturnArray = QrCodeData.map((element) => {
        SaleDataPOS.map(e => {
            if (element.BillPk == e.pk) {
                element.PaymentMode = e.PaymentMode
                element.PaymentMode = e.PaymentMode
                element.salePOSDateTime = e.Date;
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
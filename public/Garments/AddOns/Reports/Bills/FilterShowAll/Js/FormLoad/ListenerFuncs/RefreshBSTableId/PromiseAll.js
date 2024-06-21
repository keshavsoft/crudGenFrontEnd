import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncShowPos } from "./Promises/ShowPos/PostFetch.js";
import { StartFunc as StartFuncItems } from "./Promises/Items/PostFetch.js";

let StartFunc = async () => {
    const [ItemDetails, BillData, ItemsMaster] = await Promise.all([StartFuncItemDetails(), StartFuncShowPos(), StartFuncItems()]);

    let jVarLocalItemDetails = ItemDetails;
    let jVarLocalBillData = Object.create(BillData);
    let jVarLocalItemsMaster = ItemsMaster;

    let jVarLocalWithBillData = jFLocalInsertBillData({
        inItemDetails: jVarLocalItemDetails,
        inBillData: jVarLocalBillData
    });

    let jVarLocalDateFilter = jVarLocalWithBillData.filter(element => element === undefined === false).filter(element => {
        return Date.parse(element.Date) > Date.parse("2024-06-16");
    });

    console.log("jVarLocalDateFilter : ", jVarLocalDateFilter);

    let jVarLocalClubbedData = jFLocalInsertGst({
        inItemDetails: jVarLocalDateFilter,
        inItemsMaster: jVarLocalItemsMaster
    });

    let jVarLocalGroupedData = jFLocalGroupData({ inArray: jVarLocalClubbedData });
    
    jFLocalCalculateTotals({ inObject: jVarLocalGroupedData });

    let jVarLocalReturnArray = jFLocalEndArray({
        inObject: jVarLocalGroupedData,
        inBillData: BillData
    });
};

let jFLocalEndArray = ({ inObject, inItemDetails, inBillData }) => {
    let jVarLocalItemDetails = inItemDetails;
    let jVarLocalBillData = inBillData;

    let jVarLocalReturnArray = [];

    for (const [key, value] of Object.entries(inObject)) {
        for (const [SecondKey, SecondValue] of Object.entries(value)) {
            let jVarLoopInsideObject = {};

            let LoopInsideFindBill = jVarLocalBillData.find(LoopMaster => {
                return LoopMaster.BillNumber2425 === parseInt(key);
            });

            jVarLoopInsideObject.BillNumber = key;

            if (LoopInsideFindBill === undefined === false) {
                jVarLoopInsideObject.Date = LoopInsideFindBill?.Date;
                jVarLoopInsideObject.CustomerNumber = LoopInsideFindBill?.CustomerNumber;
                jVarLoopInsideObject.CustomerName = LoopInsideFindBill?.CustomerName;
                jVarLoopInsideObject.GSTPercentage = parseFloat(SecondKey);
                jVarLoopInsideObject.TotalAmount = SecondValue.TotalAmount;
                jVarLoopInsideObject.CgstAmount = ((SecondValue.TotalAmount * jVarLoopInsideObject.GSTPercentage / (100 + jVarLoopInsideObject.GSTPercentage)) / 2).toFixed(2);
                jVarLoopInsideObject.SgstAmount = ((SecondValue.TotalAmount * jVarLoopInsideObject.GSTPercentage / (100 + jVarLoopInsideObject.GSTPercentage)) / 2).toFixed(2);
            };

            jVarLocalReturnArray.push(jVarLoopInsideObject);
        }
    }

    return jVarLocalReturnArray;
};

let jFLocalGroupData = ({ inArray }) => {
    function groupBy(arr, branch) {
        return Object.groupBy(arr, item => item[branch]);
    };

    const grouped = groupBy(inArray, "BillNumber");

    for (const prop of Object.keys(grouped)) {
        grouped[prop] = groupBy(grouped[prop], "ItemGst");
    };

    return grouped;
    // GrossAmout
};

let jFLocalCalculateTotals = ({ inObject }) => {
    for (const [key, value] of Object.entries(inObject)) {
        for (const [SecondKey, SecondValue] of Object.entries(value)) {
            let LoopInsideGrossAmout = SecondValue.map(element => element.GrossAmout);
            let LoopInsideTotal = LoopInsideGrossAmout.reduce((a, b) => a + b, 0); // 10
            SecondValue.TotalAmount = LoopInsideTotal
        }
    };
};

let jFLocalInsertGst = ({ inItemDetails, inItemsMaster }) => {
    let jVarLocalItemDetails = inItemDetails;
    let jVarLocalItemsMaster = inItemsMaster;

    let jVarLocalClubbedData = jVarLocalItemDetails.map(element => {
        let LoopInsideFind = jVarLocalItemsMaster.find(LoopMaster => {
            return LoopMaster.ItemName === element.ProductName;
        });

        return { ...element, ItemGst: LoopInsideFind?.GST };
    });

    return jVarLocalClubbedData;
};

let jFLocalInsertBillData = ({ inItemDetails, inBillData }) => {
    let jVarLocalItemDetails = inItemDetails;
    let jVarLocalBillData = inBillData;

    let jVarLocalClubbedData = jVarLocalItemDetails.map(element => {
        let LoopInsideFind = jVarLocalBillData.find(LoopMaster => {
            return LoopMaster.pk === parseInt(element.BillPk);
        });

        if (LoopInsideFind === undefined === false) {
            return {
                ...element,
                CustomerNumber: LoopInsideFind?.CustomerNumber,
                Date: LoopInsideFind?.Date,
                BillNumber: LoopInsideFind?.BillNumber2425,
                CustomerName: LoopInsideFind?.CustomerName
            };
        };
    });

    return jVarLocalClubbedData;
};

export { StartFunc }
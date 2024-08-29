import { StartFunc as StartFuncVoucherDetails } from "./Promises/ShowVoucherDetails/PostFetch.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";

let StartFunc = async () => {
    const [a, b] = await Promise.all([StartFuncVoucherDetails(), StartFuncItemDetails()]);

    if (a.KTF && b.KTF) {
        let jVarLocalDcData = a.JsonData;
        let jVarLocalItemsData = b.JsonData;
        let jVarLocalBranchName = localStorage.getItem("BranchName");

        let LocalBranchFilterData = jVarLocalDcData.filter(e => e.BranchName == jVarLocalBranchName);
        let LocalArrayReverseBranchData = LocalBranchFilterData.slice().reverse();

        let LocalScanedFilterData = jVarLocalItemsData.filter(e => e.BranchName == jVarLocalBranchName);
        let LocalArrayReverseScannedData = LocalScanedFilterData.slice().reverse();

        jFLocalHideSpinner();
        var $table = $("#table");
        let jVarLocalData = jFLocalItemsData({
            inDcData: LocalArrayReverseBranchData,
            inItemsData: LocalArrayReverseScannedData,

        });
        $table.bootstrapTable("load", jVarLocalData);
    };
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalItemsData = ({ inDcData, inItemsData }) => {
    let jVarLocalDcData = inDcData;
    let jVarLocalItemsData = inItemsData;

    let localArrayObj = jVarLocalDcData;

    let jVarLocalReturnArray = localArrayObj.map((element) => {

        let LocalFilterdata = jVarLocalItemsData.filter(e => e.VoucherRef == element.pk)

        element.ItemDetails = jVarLocalItemsData.length > 0 ? LocalFilterdata.length : 0;

        return element;
    });

    return jVarLocalReturnArray;
};


export { StartFunc }
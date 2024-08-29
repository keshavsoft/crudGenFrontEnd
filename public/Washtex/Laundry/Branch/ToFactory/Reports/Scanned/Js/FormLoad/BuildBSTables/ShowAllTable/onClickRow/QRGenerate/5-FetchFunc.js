// import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

const StartFunc = async ({ inRowData }) => {
    let LocalSalesRef = inRowData.pk;
    console.log("LocalSalesRef: ", LocalSalesRef);
    let jVarLocalFetchUrl = `bin/Factory/QrCodeDetails/RowCount/VoucherRef/${LocalSalesRef}`;

    let response = await fetch(jVarLocalFetchUrl);
    if (response.status === 200) {
        let jVarLocalResponse = await response.json();
        console.log("jVarLocalResponse: ", jVarLocalResponse);
        // StartFuncAfterFetch({ inFromFetch: jVarLocalResponse, inRowData });
    } else {
        swal.fire({ icon: "error", title: "no data" })
    };

};

export { StartFunc };

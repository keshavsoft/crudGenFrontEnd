import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";

let StartFunc = async () => {
    jFLocalHideSpinner();
    let jVarLocalFetchData = await StartFuncGetFetch();
    var $table = $('#table');
    let processedData = await jFLocalInsertItemCount(jVarLocalFetchData);
    $table.bootstrapTable("load", processedData);
    //console.log("jVarLocalFetchData:", jVarLocalFetchData);
};

async function jFLocalInsertItemCount(inData) {
    const response1 = await fetch('/bin/BillsStiching/dataOnly');
    const response2 = await fetch('/bin/DeliveryStiching/dataOnly');
    const fetchData1 = await response1.json();
    const fetchData2 = await response2.json();
    
    const processedData = inData.map(item => {
        const filteredData1 = fetchData1.filter(fetchItem => fetchItem.FK === item.pk.toString());
        const filteredData2 = fetchData2.filter(fetchItem => fetchItem.FK === item.pk.toString());
        item.ItemCount = filteredData1.length - filteredData2.length; // Update based on difference
        return item;
    });
    
    return processedData;
}

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }
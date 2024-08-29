
let StartFunc = ({ inQrCodeData, ScanedQrCodeData }) => {

    let jVarLocalBranchName = localStorage.getItem("FactoryName");

    let LocalFilterQrCodeData = inQrCodeData.filter(e => e.DCFactory == jVarLocalBranchName);
    let LocalFilterScanedQrData = ScanedQrCodeData.filter(e => e.FactorySelected == jVarLocalBranchName);

    let LocalFilterScanedData = jFLocalFilerFunc({ inQrCodeData: LocalFilterQrCodeData, ScanedQrCodeData: LocalFilterScanedQrData })
    if ((LocalFilterScanedData.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });
    let LocalArrayReverseData = LocalFilterScanedData.slice().reverse();

    jFLocalHideSpinner();
    var $table = $('#table');

    $table.bootstrapTable("load", LocalArrayReverseData);
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

const jFLocalFilerFunc = ({ inQrCodeData, ScanedQrCodeData }) => {
    let data1 = inQrCodeData;
    let data2 = ScanedQrCodeData;

    const qrCodes1 = new Set(data1.map(record => record.QrCodeId));
    const qrCodes2 = new Set(data2.map(record => record.QrCodeId));

    const unmatchedInData1 = data1.filter(record => !qrCodes2.has(record.QrCodeId));
    const unmatchedInData2 = data2.filter(record => !qrCodes1.has(record.QrCodeId));

    return [...unmatchedInData1, ...unmatchedInData2];

};


let jFLocalKInterval = ({ inCurrentdateandtime }) => {
    if (inCurrentdateandtime === undefined) {
        return "";
    }
    var diffMs = (new Date() - new Date(inCurrentdateandtime)); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...";

    // console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...");
};
export { StartFunc }

let StartFunc = ({ inDataToShow, inQrCodeData, ScanedQrCodeData }) => {
    let LocalDataToShow = inDataToShow;

    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let LocalFilterQrCodeData = inQrCodeData.filter(e => e.BookingData.OrderData.BranchName == jVarLocalBranchName);
    let LocalFilterScanedQrData = ScanedQrCodeData.filter(e => e.BranchName == jVarLocalBranchName);

    let LocalFilterScanedData = jFLocalFilerFunc({ inQrCodeData: LocalFilterQrCodeData, ScanedQrCodeData: LocalFilterScanedQrData })
    if ((LocalFilterScanedData.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    jFLocalHideSpinner();
    var $table = $('#table');
    
    $table.bootstrapTable("load", LocalFilterScanedData);
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

const jFLocalFilerFunc = ({ inQrCodeData, ScanedQrCodeData }) => {
    let StatusData = inQrCodeData.map(element => {
        element.Status = ""
        let someData = ScanedQrCodeData.filter(e => {
            if (e.QrCodeId == element.pk) {
                element.Status = "Scaned"
                element.VoucherNumber = e.VoucherNumber;
                element.DCFactory = e.DCFactory;
                element.TimeSpan = jFLocalKInterval({ inCurrentdateandtime: e.DateTime });

                return element;
            }
        });
        return element;
    });
    return StatusData

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
};
export { StartFunc }
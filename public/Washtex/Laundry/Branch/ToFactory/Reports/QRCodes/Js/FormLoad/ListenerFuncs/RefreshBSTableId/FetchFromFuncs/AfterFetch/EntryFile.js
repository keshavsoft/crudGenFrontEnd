let StartFunc = async ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;

    let QrGenerateFetchUrl = `/bin/QrCodes/Generate`;
    let response = await fetch(QrGenerateFetchUrl);
    let data = await response.json();
    let qrData = data.JsonData;

    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let LocalFilterScanedData = LocalDataToShow.filter(e => e.BranchName == jVarLocalBranchName );
    if ((LocalFilterScanedData.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    let LocalDataIds = LocalFilterScanedData.map(item => item.pk);
    let filteredQrData = qrData.filter(qrItem => 
        qrItem.BookingData.OrderData.BranchName === jVarLocalBranchName && !LocalDataIds.includes(qrItem.QrCodeId)
    );
    console.log("filteredQrData: ", filteredQrData);

    jFLocalHideSpinner();
    var $table = $('#table');
    $table.bootstrapTable("load", filteredQrData);
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};


export { StartFunc }
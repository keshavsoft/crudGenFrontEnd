
let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let LocalFilterScanedData = LocalDataToShow.filter(e => e.BranchName == jVarLocalBranchName);
    let LocalArrayReverseData = LocalFilterScanedData.slice().reverse();

    if ((LocalFilterScanedData.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    jFLocalHideSpinner();
    var $table = $('#table');
    $table.bootstrapTable("load", LocalArrayReverseData);
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};


export { StartFunc }

let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocaldayDate = jFTodayDate();
    let FlterDataByBranch = LocalDataToShow.filter(e => e.BranchName == jVarLocalBranchName && new Date(e.DateTime).toISOString().slice(0, 10) == jVarLocaldayDate);
    let LocalArrayReverseData = FlterDataByBranch.slice().reverse();

    if ((FlterDataByBranch.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    jFLocalHideSpinner();
    
    var $table = $('#table');
    $table.bootstrapTable("load", LocalArrayReverseData);
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

const jFTodayDate = () => {
    var today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    return today = yyyy + '-' + mm + '-' + dd;

};


export { StartFunc }
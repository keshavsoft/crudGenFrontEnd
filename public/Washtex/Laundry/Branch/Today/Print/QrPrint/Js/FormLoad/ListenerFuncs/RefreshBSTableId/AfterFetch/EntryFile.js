let StartFunc = ({ inDataToShow }) => {
    jFLocalHideSpinner();
    let LocalinDataToShow = inDataToShow;
    var $table = $('#table');
    $table.bootstrapTable("load", LocalinDataToShow);

};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }
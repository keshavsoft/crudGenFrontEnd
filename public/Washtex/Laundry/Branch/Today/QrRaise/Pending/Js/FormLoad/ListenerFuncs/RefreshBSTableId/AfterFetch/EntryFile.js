let StartFunc = ({ inDataToShow }) => {
    jFLocalHideSpinner();

    let LocalinDataToShow = inDataToShow;
    var $table = $('#table');
    let LocalFiterData = jFLocalFilter({ inData: LocalinDataToShow });
    $table.bootstrapTable("load", LocalFiterData);
};
let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

const jFLocalFilter = ({ inData }) => {
    let LocalReturData = inData.filter(element => element.TotalItems === 0);
    return LocalReturData;
};

export { StartFunc };

let StartFunc = ({ inDataToShow }) => {
    jFLocalHideSpinner();

    let LocalinDataToShow = inDataToShow;
    var $table = $('#table');
    // let jVarLocalTransformedData = jFLocalInsertAggValues({ inData: LocalinDataToShow });
    // let jVarWithQrCodeData = jFLocalInsertQrCodeData({ inData: jVarLocalTransformedData, inQrCodeData: inQrCodeData });
    // let LocalArrayReverseData = LocalinDataToShow.slice().reverse();

    $table.bootstrapTable("load", LocalinDataToShow);
};
let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};



export { StartFunc };

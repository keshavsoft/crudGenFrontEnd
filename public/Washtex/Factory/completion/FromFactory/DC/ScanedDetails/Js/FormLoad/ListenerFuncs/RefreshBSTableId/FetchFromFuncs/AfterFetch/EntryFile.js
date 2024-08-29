let StartFunc = async ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;
    
    var $table = $('#table');
    $table.bootstrapTable({
        data: jVarLocalDataToShow,
    });
    
};

export { StartFunc }
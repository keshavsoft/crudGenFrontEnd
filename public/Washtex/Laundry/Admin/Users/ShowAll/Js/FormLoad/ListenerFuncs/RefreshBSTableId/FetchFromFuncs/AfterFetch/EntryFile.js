let StartFunc = ({ inDataToShow }) => {
    console.log("inDataToShow: ", inDataToShow);
    var $table = $('#table');
    
    $table.bootstrapTable("destroy").bootstrapTable({
        data: inDataToShow,
    });
};

export { StartFunc }
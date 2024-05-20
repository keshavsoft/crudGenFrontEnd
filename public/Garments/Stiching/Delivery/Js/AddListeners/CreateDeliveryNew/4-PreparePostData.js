let StartFunc = () => {
    var $table = $('#table')
    var JVarLocalArray = $.map($table.bootstrapTable('getSelections'), function (row) {
        console.log(row);
        return {
            ProductName: row.ProductName,
            GrossAmount: row.GrossAmount,
            ItemDescription: row.ItemDescription,
            FK: row.FK,
            Itempk: row.pk,
            delivery: row.delivery,
            deliveryItemDisAmount: jFLocalDiscount(),
            deliveryItemDescription: jFLocalDescription()
        };
    });
    return JVarLocalArray;
};

let jFLocalDiscount = () => {
    let jVarLocalDiscount = 'Discount'
    let jVarLocalHtmlId = document.getElementById(jVarLocalDiscount);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalDescription = () => {
    let jVarLocalDescription = 'Description'
    let jVarLocalHtmlId = document.getElementById(jVarLocalDescription);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };
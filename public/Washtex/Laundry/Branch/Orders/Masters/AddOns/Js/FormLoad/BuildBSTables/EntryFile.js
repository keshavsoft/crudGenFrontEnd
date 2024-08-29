const StartFunc = () => {
    jFLocalToTableTag();
    jFPrepareColumns();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        sortName:"AddOnService",
        sortOrder: "asc"
    });
};

const jFLocalToTableTag = () => {
    var $table = $('#table');

    const tableAttributes = {
        "data-show-columns": "true",
        "data-search": "true",
        "data-search-highlight": "true",
        "data-searchable": "true",
        "data-show-columns-toggle-all": "true",
        "data-minimum-count-columns": "3",
        "data-id-field": "pk",
        "data-show-pagination-switch" : "true",
        "data-pagination" : "true"
    };

    $table.attr(tableAttributes);
};

const jFPrepareColumns = () => {
    jFPrepareAddOnService();
    jFPrepareAddOnRate();
};

const jFPrepareAddOnService = () => {
    var $AddOnService = $('#AddOnService');

    const AddOnServiceAttribute = {
        "data-field": "AddOnService",
        "data-sortable": "true",
        "data-sort-name": "AddOnService",
        "data-sort-order": "desc"
    };

    $AddOnService.attr(AddOnServiceAttribute);
    $AddOnService.addClass("d-none d-sm-table-cell");
};

const jFPrepareAddOnRate = () => {
    var $AddOnRate = $('#AddOnRate');

    const AddOnRateAttributes = {
        "data-field": "AddOnRate",
        "data-sortable": "true",
        "data-sort-name": "AddOnRate",
        "data-sort-order": "desc",
        "data-halign": "left",
        "data-align": "right"
    };

    $AddOnRate.attr(AddOnRateAttributes);
    $AddOnRate.addClass("d-none d-sm-table-cell");
};

export { StartFunc };

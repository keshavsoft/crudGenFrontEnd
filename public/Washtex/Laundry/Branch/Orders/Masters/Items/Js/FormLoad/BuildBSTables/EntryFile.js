import Attributes from './Attributes.json' with {type: 'json'};

const StartFunc = () => {
    jFLocalToTableTag();
    jFPrepareColumns();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable(Attributes.loadObject);
};

const jFLocalToTableTag = () => {
    var $table = $('#table');

    $table.attr(Attributes.tableAttributes);
};

const jFPrepareColumns = () => {
    jFPrepareCategory();
    jFPrepareItemName();
    jFPreparePieces();
    jFPrepareWashType();
    jFPrepareWashRate();

};

const jFPrepareCategory = () => {
    var $Category = $('#Category');

    $Category.attr(Attributes.coloumnAttributes.CategoryAttributes);
    $Category.addClass("d-none d-sm-table-cell");
};

const jFPrepareItemName = () => {
    var $ItemName = $('#ItemName');

    $ItemName.attr(Attributes.coloumnAttributes.ItemNameAttributes);
    $ItemName.addClass("d-none d-sm-table-cell");
};

const jFPreparePieces = () => {
    var $Pieces = $('#Pieces');

    $Pieces.attr(Attributes.coloumnAttributes.PiecesAttributes);
    $Pieces.addClass("d-none d-sm-table-cell");
};

const jFPrepareWashType = () => {
    var $WashType = $('#WashType');

    $WashType.attr(Attributes.coloumnAttributes.WashTypeAttributes);
    $WashType.addClass("d-none d-sm-table-cell");
};

const jFPrepareWashRate = () => {
    var $DryWashRate = $('#DryWashRate');

    $DryWashRate.attr(Attributes.coloumnAttributes.DryWashRateAttributes);
    $DryWashRate.addClass("d-none d-sm-table-cell");
};

export { StartFunc };

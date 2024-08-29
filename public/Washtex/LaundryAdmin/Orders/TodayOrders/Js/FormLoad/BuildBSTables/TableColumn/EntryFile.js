import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import columnsJson from './columns.json' with {type: 'json'};
import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";


const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        columns: columnsJson,
        data: [],
        onClickRow: onClickRow

    });
};

export { StartFunc };
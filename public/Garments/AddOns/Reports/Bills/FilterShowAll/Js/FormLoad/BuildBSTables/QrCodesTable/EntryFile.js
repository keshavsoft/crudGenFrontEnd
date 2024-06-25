import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import columnsJson from './columns.json' with {type: 'json'};

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');
    $table.bootstrapTable({
        columns: columnsJson,
        data: []
    });
};

export { StartFunc };
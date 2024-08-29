import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import IconsJson from './icons.json' with {type: 'json'};
import searchJson from './search.json' with {type: 'json'};

const StartFunc = () => {
    jFLocalToTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        // detailView: true,
        onExpandRow: StartFuncOnExpandRow,
        icons: IconsJson
    });

};

const jFLocalToTableTag = () => {
    var $table = $('#table');

    $table.attr(searchJson.tableAttributes);
};

export { StartFunc };

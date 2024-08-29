import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as onExpandRow } from "./onExpandRow/EntryFile.js";
import IconsJson from './icons.json' with {type: 'json'};
const tableName = "table";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $(`#${tableName}`);
    console.log("IconsJson : ", IconsJson);
    $table.bootstrapTable("destroy").bootstrapTable({
        onExpandRow,
        icons: IconsJson,
        detailView: true,
        data: []
    });
};

export { StartFunc };

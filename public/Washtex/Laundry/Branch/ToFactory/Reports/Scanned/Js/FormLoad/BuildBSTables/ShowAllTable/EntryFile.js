import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as StartFuncTableTag } from "./TableTag.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');
    $table.bootstrapTable({
        data: [],
        onClickRow: StartFuncOnClickRowFunc
    });
};

export { StartFunc };

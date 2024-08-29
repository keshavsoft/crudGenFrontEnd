import { StartFunc as StartFuncButtonClickFunc } from "./BranchSelect/EntrtFile.js";

const StartFunc = (row, $element, field) => {
    if (field === "BranchName") {
        StartFuncButtonClickFunc({ inRowData: row });
    };
};
export { StartFunc };
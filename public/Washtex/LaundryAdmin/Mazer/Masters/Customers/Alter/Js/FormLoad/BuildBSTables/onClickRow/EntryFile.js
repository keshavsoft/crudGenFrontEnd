import { StartFunc as StartFuncDeleteButton } from "./DeleteButton.js";

const StartFunc = (row, $element, field) => {
    if (field === 5) {
        StartFuncDeleteButton({ inRow: row });
    };
};
export { StartFunc };
import { StartFunc as StartFuncFetch } from "./FetchFuncs/EntryFile.js"

let StartFunc = () => {
    StartFuncFetch();
};

export { StartFunc };
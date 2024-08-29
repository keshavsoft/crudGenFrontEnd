import { StartFunc as StartFuncTransactionsFetch } from "./TransactionsFetch/PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncTransactionsFetch();

    if (jVarLocalDataNeeded !== null) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
        };
};

export { StartFunc }
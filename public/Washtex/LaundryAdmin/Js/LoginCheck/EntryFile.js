import { StartFunc as StartFuncValidateToken } from "./ValidateToken/Entry.js";
import { StartFunc as  StartFuncIsFailure} from "./IsFailure/EntryFile.js";

const StartFunc = async ({ inSuccessFunc }) => {
    let jVarLoaclFromFetch = await StartFuncValidateToken();
    console.log("jVarLoaclFromFetch:",jVarLoaclFromFetch);
    
    if (jVarLoaclFromFetch === false) {
        StartFuncIsFailure({ inSuccessFunc });
        return await false;
    };

    return await true;
};

export {StartFunc};
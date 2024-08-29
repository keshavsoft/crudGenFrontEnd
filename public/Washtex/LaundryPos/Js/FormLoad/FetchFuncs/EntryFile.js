import { StartFunc as StartFetchFunc } from "./FetchFunc/EntryFile.js";
import { StartFunc as StartFunPostFetch } from "./PostFetch.js";

let jFLocalStartFunc = (inDataAsArray, inHtmlSelectId) => {
    let LocalinHtmlSelectId = inHtmlSelectId;
    let LocalDataAsArray = inDataAsArray;

    var selectElement = document.getElementById(LocalinHtmlSelectId);

    for (var i = 0; i < LocalDataAsArray.length; i++) {
        var option = document.createElement('option');
        option.value = LocalDataAsArray[i];
        option.textContent = LocalDataAsArray[i];
        selectElement.appendChild(option);
    };
};

let StartFunc = async () => {
    let Data = await StartFetchFunc();
    let BranchNames = await StartFunPostFetch(Data.JsonData);
    jFLocalStartFunc(BranchNames, "BranchSelectId");
};

export { StartFunc };
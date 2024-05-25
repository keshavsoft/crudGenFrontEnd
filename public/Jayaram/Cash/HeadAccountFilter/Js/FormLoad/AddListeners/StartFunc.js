import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";

let StartFunc = () => {
    StartFuncRefreshBSTableId();
    StartFuncButtonClickFunc2();
};

let StartFuncButtonClickFunc2 = async () => {
    let jVarLocalFetchUrl = `/bin/Openings/Unique/headnam`;
    const response = await fetch(jVarLocalFetchUrl);
    //console.log(jVarLocalFetchUrl);
    //console.log(response);

    let jVarLocalFromResponse = await response.json();
    //console.log("jVarLocalFromResponse : ", jVarLocalFromResponse);
    for (var i = 0; i < jVarLocalFromResponse.length; i++) {
        $("#AccountId").append('<option value="' + jVarLocalFromResponse[i] + '">' + jVarLocalFromResponse[i] + '</option>');
    }
    return jVarLocalFromResponse;
};

export { StartFunc };
import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";

let StartFunc = () => {
    StartFuncRefreshBSTableId();
    StartFuncButtonClickFunc2();
};

let LocalFetchAll = async () => {
    const urlArray = [];
    urlArray.push(`/bin/Openings/Unique/nam`);
    urlArray.push(`/bin/Openings/Unique/headnam`);
    urlArray.push(`/bin/Accounts/Unique/nam`);
    urlArray.push(`/bin/Accounts/Unique/headnam`);

    var promises = urlArray.map(async (url) => {
        let res = await fetch(url)
        return await res.json()
    })
    const results = await Promise.all(promises);
    const ClubbedArray = [...results[0], ...results[1], ...results[2], ...results[3]];

    return Array.from(new Set(ClubbedArray)).sort();
};

let StartFuncButtonClickFunc2 = async () => {
    const dataArray = await LocalFetchAll();

    for (var i = 0; i < dataArray.length; i++) {
        $("#AccountId").append('<option value="' + dataArray[i] + '">' + dataArray[i] + '</option>');
    };
};

export { StartFunc };
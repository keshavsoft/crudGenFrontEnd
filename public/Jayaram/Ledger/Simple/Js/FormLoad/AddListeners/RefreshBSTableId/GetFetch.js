let StartFunc = async () => {

    return await LocalFetchAll();
};

let LocalFetchAll = async () => {
    let Account = document.getElementById("AccountId1").value;

    const urlArray = [];

    urlArray.push(`/bin/Openings/FilterData/nam/${Account}`);
    urlArray.push(`/bin/Openings/FilterData/headnam/${Account}`);
    urlArray.push(`/bin/Accounts/FilterData/nam/${Account}`);
    urlArray.push(`/bin/Accounts/FilterData/headnam/${Account}`);

    var promises = urlArray.map(async (url) => {
        let res = await fetch(url)
        return await res.json()
    });

    const results = await Promise.allSettled(promises);
    let ClubbedArray = [];

    //console.log("results : ", results);
    if (results[0].status === "fulfilled") ClubbedArray = [...ClubbedArray, ...results[0].value];
    if (results[1].status === "fulfilled") ClubbedArray = [...ClubbedArray, ...results[1].value];
    if (results[2].status === "fulfilled") ClubbedArray = [...ClubbedArray, ...results[2].value];
    if (results[3].status === "fulfilled") ClubbedArray = [...ClubbedArray, ...results[3].value];

    // ClubbedArray = [...ClubbedArray, ...results[1].value, ...results[2].value, ...results[3].value];

    // const ClubbedArray = [...results[0], ...results[1], ...results[2], ...results[3]];

    return Array.from(new Set(ClubbedArray));
};

let StartFunc_oldCode_keshav25May2024 = async () => {
    let Account = document.getElementById("AccountId1").value;
    let jVarLocalFetchUrl = `/bin/Openings/FilterData/nam/${Account}`;
    const response = await fetch(jVarLocalFetchUrl);

    let jVarLocalFromResponse = await response.json();

    return jVarLocalFromResponse;
};

export { StartFunc };

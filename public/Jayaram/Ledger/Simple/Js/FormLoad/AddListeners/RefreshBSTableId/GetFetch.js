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

    console.log("results : ", results);

    jFLocalReverseAccount({ i: 0, jVLocalResult: results, ClubbedArray });
    jFLocalAsIsAccount({ i: 1, jVLocalResult: results, ClubbedArray });
    jFLocalAsIsAccount({ i: 2, jVLocalResult: results, ClubbedArray });
    jFLocalReverseAccount({ i: 3, jVLocalResult: results, ClubbedArray });
    
    return Array.from(new Set(ClubbedArray));
};

let jFLocalHeadRows = ({inData}) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.amt = -element.amt;

        return element;
    });

    return jVarLocalReturnArray;
}

let jFLocalReverseAccount = ({ i, jVLocalResult, ClubbedArray }) => {
    if (jVLocalResult[i].status === "fulfilled") {
        ClubbedArray.push(...jFLocalHeadRows({ inData: jVLocalResult[i].value }));
    }
};

let jFLocalAsIsAccount = ({ i, jVLocalResult, ClubbedArray }) => {
    if (jVLocalResult[i].status === "fulfilled") {
        ClubbedArray.push(...jVLocalResult[i].value);
    }
};
export { StartFunc };
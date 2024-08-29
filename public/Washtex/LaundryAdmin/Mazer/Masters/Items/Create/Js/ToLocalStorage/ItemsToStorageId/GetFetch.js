let StartFunc = async () => {
    let jVarLocalCustomersData = "ItemNames";

    let jVarLocalFetchUrl = "/bin/masters/Items/DataOnly";

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();

    localStorage.setItem(jVarLocalCustomersData, JSON.stringify(jVarLocalFromFetchJson));
};

export { StartFunc }
let StartFunc = async () => {
    let jVarLocalCustomersData = "AddOns";

    let jVarLocalFetchUrl = "/bin/masters/AddOns/DataOnly";

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();

    localStorage.setItem(jVarLocalCustomersData, JSON.stringify(jVarLocalFromFetchJson));
};

export { StartFunc }
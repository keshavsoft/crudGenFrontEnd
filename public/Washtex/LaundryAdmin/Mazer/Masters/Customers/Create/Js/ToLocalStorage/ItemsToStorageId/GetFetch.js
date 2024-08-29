let StartFunc = async () => {
    let jVarLocalCustomersData = "CustomerNames";

    let jVarLocalFetchUrl = "/bin/masters/CustomerNames/DataOnly";

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();

    localStorage.setItem(jVarLocalCustomersData, JSON.stringify(jVarLocalFromFetchJson));
};

export { StartFunc }
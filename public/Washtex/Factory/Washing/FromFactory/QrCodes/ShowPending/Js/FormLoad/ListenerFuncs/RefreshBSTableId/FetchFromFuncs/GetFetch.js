let StartFunc = async () => {
    let jVarLocalFetchUrl = `/binV3/WashingScan/Show/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };
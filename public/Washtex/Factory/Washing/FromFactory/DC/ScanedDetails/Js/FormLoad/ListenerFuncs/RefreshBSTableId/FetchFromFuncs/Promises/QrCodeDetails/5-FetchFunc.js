let StartFunc = async () => {
    let jVarLocalFetchUrl = `/binV3/WashingScan/Show/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
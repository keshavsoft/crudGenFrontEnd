let StartFunc = async () => {
    let jVarLocalFetchUrl = `/binV3/CompletionScan/Show/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
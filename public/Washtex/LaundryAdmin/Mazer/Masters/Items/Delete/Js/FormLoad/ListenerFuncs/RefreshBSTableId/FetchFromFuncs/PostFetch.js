let StartFunc = async () => {
    let jVarLocalFetchUrl = `/binV3/MastersItems/Show/DataOnly`
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };
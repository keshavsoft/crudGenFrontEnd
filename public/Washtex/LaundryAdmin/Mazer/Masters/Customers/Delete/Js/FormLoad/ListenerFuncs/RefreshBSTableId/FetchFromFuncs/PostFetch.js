let StartFunc = async () => {
    let jVarLocalFetchUrl = `/binV3/MastersCustomers/Show/DataOnly`
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };
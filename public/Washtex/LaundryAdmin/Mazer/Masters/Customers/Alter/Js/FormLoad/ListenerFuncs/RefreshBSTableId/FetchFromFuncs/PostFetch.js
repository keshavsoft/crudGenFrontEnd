let StartFunc = async () => {
    let jVarLocalFetchUrl = `/AdminFixedPk/Masters/CustomerNames/DataOnly`
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };
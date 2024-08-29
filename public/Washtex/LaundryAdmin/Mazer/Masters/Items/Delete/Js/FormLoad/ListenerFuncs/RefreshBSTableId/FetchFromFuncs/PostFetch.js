let StartFunc = async () => {
    let jVarLocalFetchUrl = `/AdminFixedPk/Masters/Items/DataOnly`
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };
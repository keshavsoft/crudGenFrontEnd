let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/completion/QrCodeDetails/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };
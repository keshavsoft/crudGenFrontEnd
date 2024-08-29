let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/completion/QrCodeDetails/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
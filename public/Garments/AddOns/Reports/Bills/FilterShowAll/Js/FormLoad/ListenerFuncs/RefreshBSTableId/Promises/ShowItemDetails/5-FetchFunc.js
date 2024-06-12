import dataonly from './dataonly.json' with {type: 'json'};

let StartFunc = async () => {

    let jVarLocalFetchUrl = dataonly.url;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
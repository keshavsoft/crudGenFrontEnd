// import ApiConfigJson from "../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;

    let jVarLocalFetchUrl = `/bin/Washing/QrCodeDetails/DataOnly`;


    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
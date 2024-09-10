// import ApiConfigJson from "../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;

    let jVarLocalFetchUrl = `/binV3/BranchScan/Show/DataOnly`;


    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
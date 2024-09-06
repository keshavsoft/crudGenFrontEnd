// import ApiConfigJson from "../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};
import UrlJson from "./Url.json" with { type: "json" };

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;

    let jVarLocalFetchUrl = `${UrlJson.Url}`;


    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
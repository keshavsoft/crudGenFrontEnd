import UrlJson from './Url.json' with {type: 'json'};
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
let StartFunc = async () => {
    let branch = localStorage.getItem('BranchName');
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = UrlJson.GetUrl;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    console.log(response);
    let data = await response.json();
    return data;
};


export { StartFunc };
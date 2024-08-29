import UrlJson from './Url.json' with {type: 'json'};
import baseUrlJson from '../../../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = `/${baseUrlJson.baseUrl}/${UrlJson.GetUrl}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };
//import ConfigJson from '../../../../Config.json' with {type: 'json'};
import urlJson from './url.json' with {type: 'json'};


let StartFunc = async () => {
    let jVarLocalSubRoute = ConfigJson.routePath;
    let jVarLocalFolderName = ConfigJson.folderName;
    let jVarLocalTableName = ConfigJson.tableName;
    let jVarLocalLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;

    let jVarLocalFetchUrl = `${urlJson.endpoint}`;
    //let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/${jVarLocalFolderName}/${jVarLocalTableName}/DataOnly`;


    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();

    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(jVarLocalFromFetchJson));
};

export { StartFunc }
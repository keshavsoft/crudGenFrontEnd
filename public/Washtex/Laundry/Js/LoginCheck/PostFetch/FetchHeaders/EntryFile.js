import KeysJson from './Keys.json' assert {type: 'json'};
import { StartFunc as StartFuncPrepareBody } from "./PrepareBody.js";

let StartFunc = ({inUserName,inPassword}) => {
    KeysJson.body = JSON.stringify(StartFuncPrepareBody({inUserName,inPassword}));
    return KeysJson;
};



export { StartFunc };
import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeysJson = {};

    let jVarLocalUserName = document.getElementById('username').value;
    let jVarLocalPassword = document.getElementById('password').value;

    jVarLocalBodyKeysJson.UserName = jVarLocalUserName;
    jVarLocalBodyKeysJson.Password = jVarLocalPassword;
    
    return jVarLocalBodyKeysJson;
};


export { StartFunc }
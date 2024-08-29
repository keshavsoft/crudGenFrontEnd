import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeysJson = {};

    let jVarLocalUserName = document.getElementById('username').value;
    let jVarLocalPassword = document.getElementById('password').value;
    let jVarLocalMail = document.getElementById('email').value;

    jVarLocalBodyKeysJson.UserName = jVarLocalUserName;
    jVarLocalBodyKeysJson.Password = jVarLocalPassword;
    jVarLocalBodyKeysJson.Mail = jVarLocalMail;
    
    return jVarLocalBodyKeysJson;
};


export { StartFunc }
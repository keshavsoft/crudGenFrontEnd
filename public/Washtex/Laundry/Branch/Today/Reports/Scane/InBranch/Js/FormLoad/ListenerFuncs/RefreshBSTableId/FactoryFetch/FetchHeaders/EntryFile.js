import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys.FindValue = `${new Date().toLocaleDateString('en-GB')}`;
    jVarLocalBodyKeys.FindKey = "new Date(e.DateTime).toLocaleDateString('en-GB')";

    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

export { StartFunc }
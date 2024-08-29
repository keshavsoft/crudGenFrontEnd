import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeys = {};

    jVarLocalBodyKeys.FindKey = "new Date(e.DateTime).toLocaleDateString('en-GB')"
    jVarLocalBodyKeys.FindValue = jFLocalDate();

    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

const jFLocalDate = () => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 3);
    return currentDate.toLocaleDateString('en-GB');

}

export { StartFunc }
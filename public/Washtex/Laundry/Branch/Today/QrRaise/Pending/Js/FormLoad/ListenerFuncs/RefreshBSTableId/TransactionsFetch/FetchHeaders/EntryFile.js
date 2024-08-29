import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys.FindValue = `${new Date().toLocaleDateString('en-GB')}`;
    // jVarLocalBodyKeys.FindKey = "new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-GB')";
    jVarLocalBodyKeys.BranchName = jVarLocalBranchName;

    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

export { StartFunc }
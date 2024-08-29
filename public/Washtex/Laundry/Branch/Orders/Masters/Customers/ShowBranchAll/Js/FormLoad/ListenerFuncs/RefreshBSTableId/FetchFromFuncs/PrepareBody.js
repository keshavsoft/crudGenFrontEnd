let StartFunc = () => {

    let jVarLocalBodyKeysJson = {};
    jVarLocalBodyKeysJson.FindKey = "e.BranchName";
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    jVarLocalBodyKeysJson.FindValue = jVarLocalBranchName;
    return jVarLocalBodyKeysJson;
};

export { StartFunc }
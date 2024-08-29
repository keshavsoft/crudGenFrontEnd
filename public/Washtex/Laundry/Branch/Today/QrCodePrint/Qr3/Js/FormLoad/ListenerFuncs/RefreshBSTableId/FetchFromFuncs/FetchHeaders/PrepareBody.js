let StartFunc = () => {
    let LocalTodayDate = jFLocalGetCurrentDate();
    let jVarLocalBranchName = localStorage.getItem("BranchName");


    let jVarLocalBodyKeysJson = {};
    jVarLocalBodyKeysJson.BranchName = jVarLocalBranchName;
    jVarLocalBodyKeysJson.FindValue = LocalTodayDate;
    return jVarLocalBodyKeysJson;
};

let jFLocalGetCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = `${dd}/${mm}/${yyyy}`;
    return formattedToday;
};

export { StartFunc }
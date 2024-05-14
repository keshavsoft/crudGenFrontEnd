let StartFunc = async () => {
    //let jVarLocalFetchUrl = "/bin/Accounts/DataOnly";
    let Account=document.getElementById("AccountId1").value;
    //console.log("date:",date);
    let jVarLocalFetchUrl = `/bin/Openings/FilterData/headnam/${Account}`;
    const response = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromResponse = await response.json();
    console.log("jVarLocalFromResponse : ", jVarLocalFromResponse);
    return jVarLocalFromResponse;
};

export { StartFunc };

const StartFunc = ()=>{
    let jVarLocalBranchSelectId = document.getElementById('FactorySelectInputId');

    if (jVarLocalBranchSelectId === null === false) {
        let jVarLocalBruchSelectInputValue = jVarLocalBranchSelectId.value;
        localStorage.setItem("FactoryName", jVarLocalBruchSelectInputValue);

        window.location.href = `/Factory/Dashboard/Dashboard.html?BranchName=${jVarLocalBruchSelectInputValue}`
    };
}

export {StartFunc}
const StartFunc =()=>{
    let jVarLocalBranchSelectId = document.getElementById('BranchSelectId');

    if (jVarLocalBranchSelectId === null === false) {
        let jVarLocalBruchSelectInputValue = jVarLocalBranchSelectId.value;
        localStorage.setItem("BranchName", jVarLocalBruchSelectInputValue);

        // window.location.href = `/LaundryPos/Dashboard/Dashboard.html?BranchName=${jVarLocalBruchSelectInputValue}`;
        window.location.href = `/Washtex/Laundry/Branch/Orders/NewOrder/Customer.html`;
    };
}

export {StartFunc}
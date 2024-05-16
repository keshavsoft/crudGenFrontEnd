let StartFunc = async () => {
    return await jFSalesRefCheck();
};
const jFSalesRefCheck = () => {
    let jVarLocalFactoryNumber = document.getElementById('CustomerNumber');
    let jVarLocalFactoryName = document.getElementById('CustomerName');
    if (jVarLocalFactoryNumber.value === "") {
        jVarLocalFactoryNumber.classList.add("is-invalid");
        jVarLocalFactoryNumber.focus();
        return false;
    };
    
    if (jVarLocalFactoryName.value === "") {
        jVarLocalFactoryName.classList.add("is-invalid");
        //jVarLocalFactoryName.focus();
        return false;
    };

    if ((jVarLocalFactoryNumber.value === "") === false) {
        jVarLocalFactoryNumber.classList.remove("is-invalid");
        return true;
    };

    if ((jVarLocalFactoryName.value === "") === false) {
        jVarLocalFactoryName.classList.remove("is-invalid");
        return true;
    };
    return true;
};

export { StartFunc }
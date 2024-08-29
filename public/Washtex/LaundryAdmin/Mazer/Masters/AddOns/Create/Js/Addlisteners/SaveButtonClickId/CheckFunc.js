let StartFunc = () => {
    if ((jFAddOnService()) === false) {
        return false;
    };

    if ((jFAddOnRate()) === false) {
        return false;
    };
    return true;
};

const jFAddOnService = () => {
    let jVarAddOnService = document.getElementById('AddOnService');

    if (jVarAddOnService.value === "") {
        jVarAddOnService.classList.add("is-invalid");
        jVarAddOnService.focus();
        return false;
    };

    if ((jVarAddOnService.value === "") === false) {
        jVarAddOnService.classList.remove("is-invalid");
        return true;
    };
    return true;
};

const jFAddOnRate = () => {
    let jVarAddOnRate = document.getElementById('AddOnRate');

    if (jVarAddOnRate.value === "") {
        jVarAddOnRate.classList.add("is-invalid");
        jVarAddOnRate.focus();
        return false;
    };
    
    if ((jVarAddOnRate.value === "") === false) {
        jVarAddOnRate.classList.remove("is-invalid");
        return true;
    };
    return true;
};

export { StartFunc }
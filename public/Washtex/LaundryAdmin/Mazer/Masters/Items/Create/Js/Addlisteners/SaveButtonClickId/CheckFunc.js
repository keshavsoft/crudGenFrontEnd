let StartFunc = () => {
    if ((JFCategory()) === false) {
        return false;
    }
    if ((jfItemNmae()) === false) {
        return false;
    };
    if ((jFPieces()) === false) {
        return false;
    };
    if ((jFWashType()) === false) {
        return false;
    };
    if ((jFWashRate()) === false) {
        return false;
    };
    return true;
};

const JFCategory = () => {
    let jVarLocalFactory = document.getElementById('Category');
    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        jVarLocalFactory.focus();
        return false;
    }
};

const jfItemNmae = () => {
    let jVarLocalFactory = document.getElementById('ItemName');

    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        jVarLocalFactory.focus();
        return false;
    };

    if ((jVarLocalFactory.value === "") === false) {
        jVarLocalFactory.classList.remove("is-invalid");
        return true;
    };
    return true;
};

const jFPieces = () => {
    let jVarLocalFactory = document.getElementById('pieces');

    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        jVarLocalFactory.focus();
        return false;
    };

    if ((jVarLocalFactory.value === "") === false) {
        jVarLocalFactory.classList.remove("is-invalid");
        return true;
    };
    return true;
};

const jFWashType = () => {
    let jVarLocalFactory = document.getElementById('WashType');

    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        jVarLocalFactory.focus();
        return false;
    };

    if ((jVarLocalFactory.value === "") === false) {
        jVarLocalFactory.classList.remove("is-invalid");
        return true;
    };
    return true;
};

const jFWashRate = () => {
    let jVarLocalFactory = document.getElementById('WashRate');

    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        jVarLocalFactory.focus();
        return false;
    };

    if ((jVarLocalFactory.value === "") === false) {
        jVarLocalFactory.classList.remove("is-invalid");
        return true;
    };
    return true;
};

// const jFBranchName = () => {
//     let jVarLocalBranchName = document.getElementById('Mobile');

//     if (jVarLocalBranchName.value === "") {
//         jVarLocalBranchName.classList.add("is-invalid");
//         jVarLocalBranchName.focus();
//         return false;
//     };
//     if ((jVarLocalBranchName.value.length === 10) === false) {
//         document.getElementById("MobileClass").innerHTML = "must be 10"
//         jVarLocalBranchName.classList.add("is-invalid");
//         jVarLocalBranchName.focus();
//         return false;
//     };
//     if ((jVarLocalBranchName.value === "") === false && (jVarLocalBranchName.value.length === 10) === false) {
//         jVarLocalBranchName.classList.remove("is-invalid");
//         return true;
//     };
//     return true;
// };

export { StartFunc }
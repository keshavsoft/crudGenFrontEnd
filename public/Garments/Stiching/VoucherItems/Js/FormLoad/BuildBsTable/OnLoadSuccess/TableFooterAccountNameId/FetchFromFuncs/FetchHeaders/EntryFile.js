import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    KeysJson.body = JSON.stringify(jFLocalPrepareBody());

    return KeysJson;
};

let jFLocalPrepareBody = () => {
    let jVarLocalTableFooterDisPercent = jFLocalTableFooterDisPercent();
    
    return {
        "ProductName": LocalFuncForjVarLocalTableFooterProductNameId(),
        "GrossAmount": LocalFuncForjVarLocalTableFooterGrossAmount(),
        "DisPercent" : jVarLocalTableFooterDisPercent,
        "ItemDescription":LocalFuncForjVarLocalTableFooterItemDescription(),
        "AddOnAmount":LocalFuncForjVarLocalTableFooterAddOnAmount(),

        "FK": getUrlQueryParams({ inGetKey: "StichRef" })
    }
};

let LocalFuncForjVarLocalTableFooterGrossAmount = () => {
    let jVarLocalTableFooterBSGroupId = 'GrossAmount'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterBSGroupId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();

    };

};

let LocalFuncForjVarLocalTableFooterProductNameId = () => {
    let jVarLocalTableFooterAccountNameId = document.getElementById('ProductName');

    if (jVarLocalTableFooterAccountNameId === null === false) {
        return jVarLocalTableFooterAccountNameId.value.trim();
    };
};


let jFLocalTableFooterDisPercent = () => {
    let jVarLocalTableFooterSubGroupId = 'DisPercent'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterSubGroupId);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};
let LocalFuncForjVarLocalTableFooterItemDescription = () => {
    let jVarLocalTableFooterItemDescription = 'ItemDescription'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemDescription);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let LocalFuncForjVarLocalTableFooterAddOnAmount = () => {
    let jVarLocalTableFooterAddOnAmount = 'AddOnAmount'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterAddOnAmount);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };
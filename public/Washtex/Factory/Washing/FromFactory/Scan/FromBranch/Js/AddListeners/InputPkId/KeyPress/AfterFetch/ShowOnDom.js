let StartFunc = async ({ inFetchResonse }) => {
    let jVarLocalResponseData = await inFetchResonse;

    if (Object.values(jVarLocalResponseData).length > 0) {
        let jVarLocalFetchData = jVarLocalResponseData;
        jVarGlobalPresentViewData2 = jVarLocalFetchData;

        jFLocalToInputInputPkId({ inInputPkId: jVarLocalFetchData.pk });
        jFLocalToInputInputProductNameId({ inInputProductNameId: jVarLocalFetchData.ItemName });
        jFLocalToInputInputSalePriceId({ inInputSalePriceId: jVarLocalFetchData.Rate });
        jFLocalToInputFactorySelectedId({ inInputFactorySelectedId: jVarLocalFetchData.location })
        jFLocalToInputOrderNumberId({ inInputValue: jVarLocalFetchData.GenerateReference.ReferncePk });
        jFLocalToInputOrderDateId({ inInputValue: jVarLocalFetchData.BookingData.OrderData.Currentdateandtime });
        jFLocalToInputDeliveryDateId({ inInputValue: jVarLocalFetchData.DeliveryDateTime });
        jFLocalToInputBranchNameId({ inInputValue: jVarLocalFetchData.BookingData.OrderData.BranchName });
        jFLocalToInputWashVoucherRefId()
        jFLocalRunSaveClick();
    };
};

let jFLocalRunSaveClick = () => {
    let jVarLocalHtmlId = 'ButtonSaveId';
    let jVarLocalButtonSaveId = document.getElementById(jVarLocalHtmlId);
    jVarLocalButtonSaveId.click();
}

let jFLocalToInputInputProductNameId = ({ inInputProductNameId }) => {
    let jVarLocalHtmlId = 'InputProductNameId';
    let jVarLocalInputProductNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalInputProductNameId === null === false) {
        jVarLocalInputProductNameId.value = inInputProductNameId;
    };
};

let jFLocalToInputInputSalePriceId = ({ inInputSalePriceId }) => {
    let jVarLocalHtmlId = 'InputSalePriceId';
    let jVarLocalInputSalePriceId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputSalePriceId.value = inInputSalePriceId;
};

let jFLocalToInputFactorySelectedId = ({ inInputFactorySelectedId }) => {
    let jVarLocalHtmlId = 'InputFactorySelectedId';
    let jVarLocalInputFactorySelectedId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputFactorySelectedId.value = inInputFactorySelectedId;
};

let jFLocalToInputInputPkId = ({ inInputPkId }) => {
    let jVarLocalHtmlId = 'InputPkId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputPkId;
};

let jFLocalToInputOrderNumberId = ({ inInputValue }) => {
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputValue;
};

let jFLocalToInputOrderDateId = ({ inInputValue }) => {
    let jVarLocalHtmlId = 'OrderDateId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputValue;
};

let jFLocalToInputDeliveryDateId = ({ inInputValue }) => {
    let jVarLocalHtmlId = 'DeliveryDateId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputValue;
};
let jFLocalToInputBranchNameId = ({ inInputValue }) => {
    let jVarLocalHtmlId = 'InputBranchNameId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputValue;
};

let jFLocalToInputWashVoucherRefId = () => {
let jVarLocalWashVoucherRef = getUrlQueryParams({ inGetKey: "WashVoucherRef" });

    let jVarLocalHtmlId = 'InputWashVoucherRefVoucherRefId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = jVarLocalWashVoucherRef;
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
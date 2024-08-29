let StartFunc = async ({ inRowData }) => {
    let jVarLocalvoucherRef = inRowData.pk;

    let jVarLocalFetchUrl = `/bin/Factory/VoucherDetails/RowData/pk/${jVarLocalvoucherRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    // let data = await response.json();

    return await response;
};

export { StartFunc };
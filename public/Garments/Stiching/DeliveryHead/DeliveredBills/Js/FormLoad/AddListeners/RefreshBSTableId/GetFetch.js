let StartFunc = async () => {
    let jVarLocalHeadDelivery = await HeadDeliveryFetchFunc();
    let jVarLocalStitchingPOS = await StitchingPOSFetchFunc();
    let jVarLocalData = jVarLocalHeadDelivery.map(element => {
        jVarLocalStitchingPOS.filter(e => {
            if (element.FK == e.pk) {
                element.CustomerName = e.CustomerName;
                element.CustomerNumber = e.CustomerNumber;
                element.Date = e.Date;

            }
        });
        return element;
    });
    console.log("local data", jVarLocalData);
    return jVarLocalData;
};

let HeadDeliveryFetchFunc = async () => {
    let jVarLocalFetchUrl = `/bin/HeadDeliveryStiching/DataOnly`;
    const response = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromResponse = await response.json();
    console.log("jVarLocalFromResponse : ", jVarLocalFromResponse);
    return jVarLocalFromResponse;
};

let StitchingPOSFetchFunc = async () => {
    let jVarLocalFetchUrl = `/bin/StichingPOS/DataOnly`;
    const response = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromResponse = await response.json();
    console.log("jVarLocalFromResponse : ", jVarLocalFromResponse);
    return jVarLocalFromResponse;
};
export { StartFunc };

const StartFunc = () => {
    let jVarLocalCustomersFromLocalstorage = localStorage.getItem("CustomerNames");
    let LocalCustomerData = JSON.parse(jVarLocalCustomersFromLocalstorage);
    let customerArray = Object.values(LocalCustomerData);
    let mobileArray = customerArray.map(customer => customer.Mobile);
    const Mobile = "MobileDataListId";
    jFLocalStartFunc(mobileArray,Mobile);

};
let jFLocalStartFunc = (inDataAsArray, inHtmlSelectId) => {
    let LocalinHtmlSelectId = inHtmlSelectId;
    let LocalDataAsArray = inDataAsArray;

    var selectElement = document.getElementById(LocalinHtmlSelectId);

    for (var i = 0; i < LocalDataAsArray.length; i++) {
        var option = document.createElement('option');
        option.value = LocalDataAsArray[i];
        option.textContent = LocalDataAsArray[i];
        selectElement.appendChild(option);
    };
}
export { StartFunc };
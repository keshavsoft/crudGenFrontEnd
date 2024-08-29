const StartFunc = () => {
    let jVarLocalCustomersFromLocalstorage = localStorage.getItem("CustomerNames");
    let LocalCustomerData = JSON.parse(jVarLocalCustomersFromLocalstorage);
    let customerArray = Object.values(LocalCustomerData);
    let NameArray = customerArray.map(customer => customer.CustomerName);
    const CustomerName = "CustomerDataListId";
    jFLocalStartFunc(NameArray,CustomerName);

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
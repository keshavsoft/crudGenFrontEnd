const StartFunc = () => {
    let jVarLocalCustomersFromLocalstorage = localStorage.getItem("ItemNames");
    let LocalCustomerData = JSON.parse(jVarLocalCustomersFromLocalstorage);
    console.log(LocalCustomerData)
    let customerArray = Object.values(LocalCustomerData);
    let NameArray = customerArray.map(customer => customer.ItemName);
    const CustomerName = "ItemDataListId";
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
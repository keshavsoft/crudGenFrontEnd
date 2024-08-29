const StartFunc = () => {
    let jVarLocalCustomersFromLocalstorage = localStorage.getItem("AddOns");
    let LocalCustomerData = JSON.parse(jVarLocalCustomersFromLocalstorage);
    let ItemArray = Object.values(LocalCustomerData);
    let ItemsArray = ItemArray.map(item => item.AddOnService);
    const Item = "AddonDataListId";
    jFLocalStartFunc(ItemsArray,Item);

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
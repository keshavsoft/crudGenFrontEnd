import ConfigJson from '../../Config.json' with {type: 'json'};

const StartFunc = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;
    let jVarLocalDataFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);

    let jVarLocalItemsArray = Object.values(jVarLocalDataFromLocalStorageJson.ItemsInOrder);

    let jVarLocalAddOnsData = Object.values(jVarLocalDataFromLocalStorageJson.AddOnData);

    const augmentedItems = jVarLocalItemsArray.map(item => {
        const addOnsForItem = jVarLocalAddOnsData.filter(addOn => addOn.AddOnItemSerial === item.ItemSerial);
        return {...item, AddOns: addOnsForItem};
    });

    //console.log("data:",augmentedItems);
    return augmentedItems;
};

export { StartFunc };
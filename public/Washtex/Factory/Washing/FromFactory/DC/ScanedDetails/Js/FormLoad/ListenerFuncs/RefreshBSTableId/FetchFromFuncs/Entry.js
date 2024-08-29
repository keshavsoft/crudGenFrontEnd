import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncFactoryFactoryScan } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncWashingQrCodeDetails } from "./Promises/QrCodeDetails/EntryFile.js";

let StartFunc = async () => {
    const [a, b] = await Promise.all([StartFuncFactoryFactoryScan(), StartFuncWashingQrCodeDetails()]);

    let jVarLocalFactoryScanData = a;
    let jVarLocalWashingData = b;
    let jVarLocalFactoryName = localStorage.getItem("FactoryName");

    let LocalFactoryScanFilterData = jVarLocalFactoryScanData.filter(e => e.DCFactory == jVarLocalFactoryName)
    let LocalWashingFilterData = jVarLocalWashingData.filter(e => e.DCFactory == jVarLocalFactoryName)

    let jVarLocalDateWiseCheckCountData = jFLocalDateWiseCheckCount({
        inFactoryData: LocalFactoryScanFilterData,
        inWashingData: LocalWashingFilterData
    });

    StartFuncAfterFetch({ inDataToShow: jVarLocalDateWiseCheckCountData });
};

let jFLocalDateWiseCheckCount = ({ inFactoryData, inWashingData }) => {
    let data1 = inFactoryData;
    let data2 = inWashingData;

        const groupedData = {};
      
        data1.forEach(item => {
          const date = item.DateTime.split('T')[0];
          if (!groupedData[date]) {
            groupedData[date] = {
              Date: date,
              data1Count: 0,
              data2Count: 0
            };
          }
          groupedData[date].data1Count += 1;
        });
      
        data2.forEach(item => {
          const date = item.DateTime.split('T')[0];
          if (!groupedData[date]) {
            groupedData[date] = {
              Date: date,
              data1Count: 0,
              data2Count: 0
            };
          }
          groupedData[date].data2Count += 1;
        });
      
        return Object.values(groupedData);
};


export { StartFunc }
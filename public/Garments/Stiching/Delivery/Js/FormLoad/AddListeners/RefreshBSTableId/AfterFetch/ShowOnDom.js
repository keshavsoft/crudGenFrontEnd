let StartFunc = async ({ StichingPOS }) => {
    let jVarLocalData = StichingPOS[0];
    console.log(StichingPOS);
    jFLocalToInputCustomerNameId({ inValue: jVarLocalData.CustomerName })
    jFLocalToInputCustomerNumberId({ inValue: jVarLocalData.CustomerNumber })
};

let jFLocalToInputCustomerNameId = ({ inValue }) => {
    let jVarLocalHtmlId = 'CustomerNameId';
    let jVarLocalCustomerNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomerNameId === null === false) {
        jVarLocalCustomerNameId.innerHTML = inValue;
    };
};

let jFLocalToInputCustomerNumberId = ({inValue}) => {
    let jVarLocalHtmlId = 'CustomerNumberId';
   let jVarLocalCustomerNumberId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCustomerNumberId === null === false) {
      jVarLocalCustomerNumberId.innerHTML = inValue;
   };
};


export { StartFunc }
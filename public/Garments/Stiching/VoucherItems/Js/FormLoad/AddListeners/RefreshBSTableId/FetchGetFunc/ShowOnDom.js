
let StartFunc = async ({ inData }) => {
    let LocalData = inData[0];
    jFLocalToInputCnameId({ inValue: LocalData.CustomerName })
    jFLocalToInputCNumberId({ inValue: LocalData.CustomerNumber })

};

let jFLocalToInputCnameId = ({inValue}) => {
    let jVarLocalHtmlId = 'CnameId';
    let jVarLocalCnameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCnameId === null === false) {
        jVarLocalCnameId.innerHTML = inValue;
    };
};

let jFLocalToInputCNumberId = ({inValue}) => {
    let jVarLocalHtmlId = 'CNumberId';
   let jVarLocalCNumberId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalCNumberId === null === false) {
      jVarLocalCNumberId.innerHTML = inValue;
   };
};

export { StartFunc }
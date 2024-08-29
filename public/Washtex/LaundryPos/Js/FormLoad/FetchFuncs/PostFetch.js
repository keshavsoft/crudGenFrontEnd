
let StartFunc = async (Data) => {
  // console.log("hhhh",Data);
  let BranchNames = [];
  for (let Index = 0; Index < Data.length; Index++) {
    let jVarLocalElement = Data[Index];
    BranchNames.push(jVarLocalElement.fileName);
  }
  console.log(BranchNames);
  return BranchNames;

};

export { StartFunc };
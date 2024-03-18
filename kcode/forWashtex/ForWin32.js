let CommonProjectName = "Reports";

let LocalFolderPath = `src\\Washtex\\${CommonProjectName}`;
let LocalDestinationPath = `public\\Washtex\\${CommonProjectName}`;

let CommonWalk = require("./WalkFuncs");

let StartFunc = () => {
    CommonWalk.walk(LocalFolderPath, LocalFolderPath, LocalDestinationPath, CommonWalk.CallBackFunc);
};

module.exports = { StartFunc };


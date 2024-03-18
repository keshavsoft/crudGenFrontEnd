let CommonProjectName = "Reports";

let LocalFolderPath = `src\\Washtex\\${CommonProjectName}`;
let LocalDestinationPath = `public`;

let CommonWalk = require("./WalkFuncs");
let CommonBranchesArray = require("./Branches.json");

let StartFunc = () => {
    CommonBranchesArray.forEach(element => {
        CommonWalk.walk(LocalFolderPath, LocalFolderPath, `${LocalDestinationPath}\\${element}\\${CommonProjectName}`, element, CommonWalk.CallBackFunc);

        // CommonWalk.walk(LocalFolderPath, LocalFolderPath, LocalDestinationPath, CommonWalk.CallBackFunc);
    });
    
    
};

module.exports = { StartFunc };


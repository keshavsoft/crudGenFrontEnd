let LocalFolderPath = "Jaya";
let LocalDestinationPath = "";

import { walk, CallBackFunc } from "./WalkFuncs.js";

let StartFunc = () => {
    walk(LocalFolderPath, LocalFolderPath, LocalDestinationPath, CallBackFunc);
};

StartFunc();

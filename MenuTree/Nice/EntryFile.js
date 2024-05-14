// import nunjucks from "nunjucks";
import dirTree from "directory-tree";
import fs from "fs-extra";

import { walk } from "./WalkFuncs.js";

const tree = dirTree("Main/Menu1");
fs.mkdirSync("bin/Main/Menu1");
let CommonAssetsPath = "../assets";

// console.log(tree);
walk(tree.children, CommonAssetsPath);
//  console.log(tree.children);

// var result = walk(tree.children, "", "");
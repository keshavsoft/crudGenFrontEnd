// import nunjucks from "nunjucks";
import dirTree from "directory-tree";
import fs from "fs-extra";

import { walk } from "./WalkFuncs.js";

const tree = dirTree("Jaya1/Jaya");
fs.mkdirSync("bin/Jaya1/Jaya");
let CommonAssetsPath = "../assets";

// console.log(tree);
walk(tree.children, CommonAssetsPath);
//  console.log(tree.children);

// var result = walk(tree.children, "", "");
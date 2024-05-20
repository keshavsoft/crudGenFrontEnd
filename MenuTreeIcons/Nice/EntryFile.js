// import nunjucks from "nunjucks";
import tree from './tree.json' with { type: 'json' };
import fs from "fs-extra";

import { walk } from "./WalkFuncs.js";


console.log(tree);
fs.mkdirSync("bin/Main/Menu1");
let CommonAssetsPath = "../assets";

// console.log(tree);
walk(tree.children, CommonAssetsPath);
//  console.log(tree.children);

// var result = walk(tree.children, "", "");
// import nunjucks from "nunjucks";
import sidebar from './sidebar.json' with { type: 'json' };
import fs from "fs-extra";

import { walk } from "./WalkFuncs.js";



// let CommonAssetsPath = "../assets";

// console.log(tree);
walk(sidebar);
//  console.log(tree.children);

// var result = walk(tree.children, "", "");
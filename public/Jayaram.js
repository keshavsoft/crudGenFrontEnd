// import nunjucks from "nunjucks";
import dirTree from "directory-tree";

import { walk } from "./WalkFuncs.js";

const tree = dirTree("Jaya1/Jaya");
// console.log(tree);
walk(tree.children);
// console.log(tree.children);

// var result = walk(tree.children, "", "");
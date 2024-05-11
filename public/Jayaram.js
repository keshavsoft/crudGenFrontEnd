// import nunjucks from "nunjucks";
import dirTree from "directory-tree";

import { walk, CallBackFunc } from "./WalkFuncs.js";

const tree = dirTree("Jaya");

walk(tree.children, "", "", CallBackFunc);
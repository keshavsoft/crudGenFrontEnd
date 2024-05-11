// import nunjucks from "nunjucks";
import dirTree from "directory-tree";

import fs from "fs";

import { walk, CallBackFunc } from "./WalkFuncs.js";

const tree = dirTree("Jayaram");

tree.children.forEach(element => {
    let LoopInsideFileData = fs.readFileSync(`${element.path}/${element.name}`)
});

console.log("tree : ", tree);
// import nunjucks from "nunjucks";
import dirTree from "directory-tree";
import fs from "fs-extra";
import path from "path";

import { walk } from "./WalkFuncs.js";

const tree = dirTree("Main/Menu1");
// fs.mkdirSync("bin/Main/Menu1");
const FolderPath = "Main/Menu1";
let AllFiles = fs.readdirSync("Main/Menu1");

let HtmlFilesOnly = AllFiles.filter(element => path.parse(element).ext === ".html");

console.log("sssssssssssss : ", HtmlFilesOnly);
let CommonAssetsPath = "../assets";

walk(HtmlFilesOnly, FolderPath);
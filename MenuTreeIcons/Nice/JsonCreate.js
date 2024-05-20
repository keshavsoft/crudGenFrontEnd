import dirTree from "directory-tree";
import fs from "fs-extra";



const tree = dirTree("Main/Menu1");
console.log(tree);
fs.writeFileSync("tree.json", JSON.stringify(tree, null, 2));
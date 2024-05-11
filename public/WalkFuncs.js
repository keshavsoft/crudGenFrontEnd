import fs from "fs-extra";
import path from "path";
import nunjucks from "nunjucks";
const results = [];
var acutalResults = 0;

var walk = function (tree) {
    // console.log("dir", dir.length);
    console.log("tree", tree);
    tree.forEach(element => {
        console.log(element.path);
        if(!element.children) {
        const html = fs.readFileSync(element.path, 'utf8');

        let data = nunjucks.renderString(html, {dir:tree});
        fs.writeFileSync(`bin/${element.path}`, data, 'utf8');
        }
    });
};

let CallBackFunc = (err, inFolderPath, inDestinationPath) => {
    console.log("came to callback function", results);
    if (err) throw err;

    // done(null, results);
     return results;
};

export { walk };

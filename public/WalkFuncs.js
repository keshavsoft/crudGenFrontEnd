import fs from "fs-extra";
import nunjucks from "nunjucks";
const results = [];
var acutalResults = 0;

var walk = function (tree, inAssetsPath) {
    console.log("inAssetsPath : ", inAssetsPath);
    tree.forEach(element => {
        if ("children" in element) {
            fs.mkdirSync(`bin/${element.path}`);

            walk(element.children, `../${inAssetsPath}`);
        } else {
            const html = fs.readFileSync(element.path, 'utf8');

            let data = nunjucks.renderString(html, {
                dir: tree,
                inName: element.name, inAssetsPath
            });

            fs.writeFileSync(`bin/${element.path}`, data, 'utf8');
        };
    });
};

let CallBackFunc = (tree) => {
    console.log("came to callback function", tree);
};

export { walk };

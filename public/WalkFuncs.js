import fs from "fs-extra";
import path from "path";
import nunjucks from "nunjucks";
const results = [];
var acutalResults = 0;

var walk = function (tree, done) {
    tree.forEach(element => {
        console.log("element : ", element);
        if ("children" in element) {
            fs.mkdirSync("bin/Jaya1/Jaya");

            walk(element.children, done);
        } else {

            let exists = fs.existsSync(fileName);

            if (exists === false) {
                writeFile(++i);
            } else {
                const html = fs.readFileSync(element.path, 'utf8');

                let data = nunjucks.renderString(html, { dir: tree, inName: element.name });
                fs.writeFileSync(`bin/${element.path}`, data, 'utf8');
            };
        };
    });
};

let CallBackFunc = (tree) => {
    console.log("came to callback function", tree);
};

export { walk };

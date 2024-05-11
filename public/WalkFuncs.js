import fs from "fs";
import path from "path";
import nunjucks from "nunjucks";

var walk = function (dir, inFolderPath, inDestinationPath, done) {
    var results = [];
    console.log("dir : ", dir);

    dir.forEach(element => {
        const html = fs.readFileSync(element.path);
        // console.log("aaaaaaaaaa ; ", html.toString());
        let data = nunjucks.renderString(html.toString(), { inName: element.name, dir });
        fs.writeFileSync(element.path, data);
    });
};

let CallBackFunc = (err, inFolderPath, inDestinationPath, results) => {
    if (err) throw err;

    results.forEach(element => {
        console.log("element : ", element);
    });
};

export { walk, CallBackFunc };
import fs from "fs";
import path from "path";

var walk = function (dir, inFolderPath, inDestinationPath, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, inFolderPath, inDestinationPath, results);
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, inFolderPath, inDestinationPath, function (err, inFolderPath, inDestinationPath, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};

let CallBackFunc = (err, inFolderPath, inDestinationPath, results) => {
    if (err) throw err;

    results.forEach(element => {
        const html = fs.readFileSync(element);
        let LoopInsidePath = path.parse(element);
        console.log("aaaaaaaaaa ; ", html);

    });
};

export { walk, CallBackFunc };
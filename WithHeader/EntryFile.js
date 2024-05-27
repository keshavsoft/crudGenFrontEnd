import menu from './menu.json' assert { type: "json"};
// import header from './header.json' assert { type: "json"};

import nunjucks from "nunjucks";
import fs from "fs-extra";
import path from "path";

var env = nunjucks.configure();

let startsWith = (str, targetStr) => {
    if (!str.length) return false
    return str.startsWith(targetStr)
};

env.addGlobal('startsWith', startsWith);

let html = fs.readFileSync("Normal.html", 'utf8');

menu.forEach(menuItem => {
    if ("children" in menuItem) {
        menuItem.children.forEach(child => {
            let LocalFileName = ("template" in child) ? child.template : "Normal.html";
            let html = fs.readFileSync(`Template/${LocalFileName}`, 'utf8');

            let data = nunjucks.renderString(html,
                { menu, menuItem: child}
            );
            // let folder = child.url.slice(0, -5);
            let folder = path.parse(child.url).name;

            if (!fs.existsSync(`bin/${folder}`)) fs.mkdirSync(`bin/${folder}`);
            fs.writeFileSync(`bin/${folder}/${child.url}`, data);
        });
    }
    else {
        if ("template" in menuItem) {
            html = fs.readFileSync(`Template/${menuItem.template}`, 'utf8');
        }
        else {
            html = fs.readFileSync("Normal.html", 'utf8');
        };

        let data = nunjucks.renderString(html,
            { menu, menuItem }
        );
        let folder = menuItem.url.slice(0, -5);

        if (!fs.existsSync(`bin/${folder}`)) fs.mkdirSync(`bin/${folder}`);
        // fs.mkdirSync(`bin/${folder}`);
        fs.writeFileSync(`bin/${folder}/${menuItem.url}`, data);
    };
});

// console.log(menu);
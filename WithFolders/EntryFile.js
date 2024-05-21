import sidebar from './sidebar.json' assert { type: "json"};
import nunjucks from "nunjucks";
import fs from "fs-extra";
var env = nunjucks.configure();

let startsWith = (str, targetStr) => {
    console.log("str, targetStr : ", str, targetStr);
    if (!str.length) return false
    return str.startsWith(targetStr)
};

env.addGlobal('startsWith', startsWith);

let html= fs.readFileSync("Normal.html", 'utf8');

sidebar.forEach(sidebarItem => {
    if ("children" in sidebarItem) {
        sidebarItem.children.forEach(child => {
            if("template" in child) {
                html = fs.readFileSync(`Template/${child.template}`, 'utf8');
            }
            else{
                html = fs.readFileSync("Normal.html", 'utf8');
            }

            let data = nunjucks.renderString(html,
                { sidebar, sidebarItem: child }
            );
            let folder = child.url.slice(0,-5);
            fs.mkdirSync(`bin/${folder}`);
            fs.writeFileSync(`bin/${folder}/${child.url}`, data);
        });
    }
    else {
        if("template" in sidebarItem) {
            html = fs.readFileSync(`Template/${sidebarItem.template}`, 'utf8');
        }
        else{
            html = fs.readFileSync("Normal.html", 'utf8');
        }
        let data = nunjucks.renderString(html,
            { sidebar, sidebarItem }
        );
        let folder = sidebarItem.url.slice(0,-5);
        fs.mkdirSync(`bin/${folder}`);
        fs.writeFileSync(`bin/${folder}/${sidebarItem.url}`, data);
    }
});

// console.log(sidebar);
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

const html = fs.readFileSync("Normal.html", 'utf8');

sidebar.forEach(sidebarItem => {
    if ("children" in sidebarItem) {
        sidebarItem.children.forEach(child => {
            let data = nunjucks.renderString(html,
                { sidebar, sidebarItem: child }
            );
            fs.writeFileSync(`bin/${child.url}`, data);
        });
    }
    else {
        let data = nunjucks.renderString(html,
            { sidebar, sidebarItem }
        );
        fs.writeFileSync(`bin/${sidebarItem.url}`, data);
    }
});

// console.log(sidebar);
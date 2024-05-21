import sidebar from './sidebar.json' assert { type : "json"};
import nunjucks from "nunjucks";
import fs from "fs-extra";

const html = fs.readFileSync("Normal.html", 'utf8');

sidebar.forEach(element => {
    if("children" in element){
        const menuname = element.name;
        element.children.forEach(child => {
            let data = nunjucks.renderString(html,
                {sidebar, filename : child.url, menuname}
            );
            fs.writeFileSync(`bin/${child.url}`, data);
        });
    }
    else {
        let data = nunjucks.renderString(html,
            {sidebar, filename : element.url}
        );
        fs.writeFileSync(`bin/${element.url}`, data);
    }
});

console.log(sidebar);
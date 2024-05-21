import sidebar from './sidebar.json' assert { type : "json"};
import nunjucks from "nunjucks";
import fs from "fs-extra";

const html = fs.readFileSync("Normal.html", 'utf8');

sidebar.forEach(element => {
    let data = nunjucks.renderString(html,
        {sidebar, filename : element.url}
    );
    fs.writeFileSync(`bin/${element.url}`, data);
});

console.log(sidebar);
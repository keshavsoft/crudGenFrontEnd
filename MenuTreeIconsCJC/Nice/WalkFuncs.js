import fs from "fs-extra";
import nunjucks from "nunjucks";
const results = [];
var acutalResults = 0;


var walk = function (sidebar) {
    
    sidebar.forEach(element => {

        if ("submenu" in element) {
            walk(element.submenu);
        } else if("isTitle" in element) {
        }
        else{
            const sidebar = JSON.parse(fs.readFileSync("sidebar.json", 'utf8'));
            // console.log("Json : ", json);
            console.log("Temp : ", element);
            // json.forEach(element => const html = fs.readFileSync(`Template/${element.template}`, 'utf8'));

            const html = fs.readFileSync(`Template/${element.template}`, 'utf8');

            // console.log("ResultName : ", element.name);
            // console.log("Result : ", tree);
            const Name = element.name;
            let data = nunjucks.renderString(html, {
                sidebarItems: sidebar,
                inName:Name
         });

            fs.writeFileSync(`bin/Main/${element.url}`, data, 'utf8');};
    });
};


export { walk };

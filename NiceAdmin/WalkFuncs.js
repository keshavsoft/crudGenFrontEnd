import fs from "fs-extra";
import path from "path";
import nunjucks from "nunjucks";

var obj = JSON.parse(fs.readFileSync('Main/Menu1/sidebar.json', 'utf8'));
console.log("json:",obj);

var walk = function (HtmlFilesOnly, FolderPath) {
    HtmlFilesOnly.forEach(element => {
        var fileContent = fs.readFileSync(FolderPath + '/' + element, 'utf8');
        
        const renderedContent = nunjucks.renderString(fileContent, {
            SideBarArray: obj,
            filename:element
                    });
        var destinationPath = './bin/Main/Menu1/' + element;
        fs.writeFileSync(destinationPath, renderedContent);
    });
};


export { walk };

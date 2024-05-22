import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path, { resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = resolve(__dirname, 'src');

function loopFolders(dirPath) {
    let Returnfiles = [];
    // Read the contents of the directory
    const files = fs.readdirSync(dirPath);

    // Loop through each file or directory
    for (const file of files) {
        // Get the full path to the file or directory
        const filePath = path.join(dirPath, file);

        // Check if the file or directory is a directory
        if (fs.statSync(filePath).isDirectory()) {
            // Recursively loop through the subdirectory
            Returnfiles.push(...loopFolders(filePath));
        } else {
            // Do something with the file
          //  Returnfiles.push(`${__dirname}\\${filePath}`);
          Returnfiles.push(filePath);
        }
    };

    return Returnfiles;
};

let AllFiles = loopFolders(root);


console.log("AllFiles : ", AllFiles);


AllFiles.forEach(element => {
    let html = fs.readFileSync(element, 'utf8');

    console.log("html : ", element.replace("src", "bin"));

    fs.ensureFileSync(element.replace("src", "bin"), html);

    fs.createFileSync(element.replace("src", "bin"), html);
   // fs.writeFileSync(element.replace("src", "bin"), html);
});
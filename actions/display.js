import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

function displayFn(dirPath) {
    if(dirPath==undefined){
        dirPath = process.cwd();
    }
    let pathExists = fs.existsSync(dirPath);
    if(!pathExists){
        console.log("Please enter a valid directory path");
        return;
    }
    let dirTree = traverseDir(dirPath, "");
    console.log(chalk.italic("Showing the files in the directory:\n") + chalk.red.bold(path.basename(dirPath)));
    console.log(dirTree);
}

function traverseDir(dirPath, indent){
    let dirTree = "";
    for(let file of fs.readdirSync(dirPath)){
        let filePath = path.join(dirPath, file);
        let fileStat = fs.lstatSync(filePath);
        if(fileStat.isDirectory()){
            dirTree += indent +chalk.blue(file) + "\n";
            dirTree += traverseDir(filePath, indent + "\t");
        }
        else{
            dirTree +=  indent  +chalk.green.italic(file) + "\n";
        }
    }
    return dirTree;
}

export const display = displayFn;
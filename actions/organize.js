import fs from 'fs';
import path from 'path';


function organizeFn(dirPath) {
    if(dirPath==undefined){
        console.log("Please enter a valid directory path");
        return;
    }
    let pathExists = fs.existsSync(dirPath);
    if(!pathExists){
        console.log("Please enter a valid directory path");
        return;
    }
    let newPath = path.join(dirPath, "organized_files");
    if(!fs.existsSync(newPath)){
        fs.mkdirSync(newPath);
    }
    transferFn(dirPath, newPath);

}

function transferFn(src, dest){
    for(let file of fs.readdirSync(src)){
        let filePath = path.join(src, file);
        let fileStat = fs.lstatSync(filePath);
        if(fileStat.isFile()){
            let fileExt = path.extname(filePath).substring(1);
            let fileType = getFileType(fileExt);
            sendFiles(filePath, dest, fileType);
        }
    }
}

function sendFiles(filePath, dest, fileType){
    let categoryPath = path.join(dest, fileType);
    if(!fs.existsSync(categoryPath)){
        fs.mkdirSync(categoryPath);
    }
    let newFile = path.basename(filePath);
    let destPath = path.join(categoryPath, newFile);
    fs.copyFileSync(filePath, destPath);
    console.log("The file", filePath.substring(filePath.lastIndexOf('\\')+1), "has been copied to", categoryPath.substring(categoryPath.lastIndexOf("\\")+1));
}

function getFileType(fileExt){
    for(let fileType in fileTypes){
        for(let type of fileTypes[fileType]){
            if(type == fileExt){
                return fileType;
            }
        }
    }
    return "others";
}

export const organize = organizeFn;
#!/usr/bin/env node
import chalk from 'chalk'; // use chalk to display big text to display organizer logo
import figlet from 'figlet';

import {help} from './actions/help.js';
import {display} from './actions/display.js';
import {organize} from './actions/organize.js';

let userInput = process.argv.slice(2);

let fileTypes = {
    media: ["mp4", "mkv", "js"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"], 
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    others: ['*']
}

function displayInformation(displayLogo){
    if(displayLogo){
        console.log(chalk.blue(figlet.textSync("File Organizer", {
            font: 'Slant',
        })));
    }
    help();
}


let action = userInput[0];

switch (action) {
    case "display":
        display(userInput[1]);
         break;
    case "organize":
        organize(userInput[1]);
         break;
    case "help":
        help();
         break;
    default:
         displayInformation(true);
         break;
}



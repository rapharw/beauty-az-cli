// import fs from "fs"
// import path from "path"
// import Choice from "../../lib/inquirer/choice"
// import WizardIndex from "../wizard-index"

import GetWizards from "../wizards/get-wizards"

// /**
//  * 
//  * @param {*} dirPath 
//  * @param {*} arrayOfFiles 
//  * @returns 
//  */
// const getFiles = (dirPath: string, arrayOfFiles: string[] = []) => {

//     arrayOfFiles = arrayOfFiles || []

//     const files = fs.readdirSync(dirPath);

//     files.forEach(function (file) {
//         if (fs.statSync(dirPath + "/" + file).isDirectory()) {
//             arrayOfFiles = getFiles(dirPath + "/" + file, arrayOfFiles)
//         } else {
//             if (file.includes('-wizard-index.js')) {
//                 const array = path.join(dirPath, "/", file);
//                 arrayOfFiles.push(array);
//             }
//         }
//     })
//     return arrayOfFiles
// }


// export default class JupiterGetWizards {

//     static FILE_PATH: string = "dist/app/wizards"

//     private choices: Choice[] = [];
//     private wizardsMap: Map<string, WizardIndex> = new Map();

//     constructor() {

//         getFiles(JupiterGetWizards.FILE_PATH).forEach(element => {
//             let indexRequired = require("../" + element.replace("dist/app/", "").replace("dist\\app\\", ""));
//             let wizardIndex: WizardIndex = new indexRequired.default();

//             let wizardChoice: Choice = wizardIndex.getChoice();

//             this.wizardsMap.set(wizardChoice.value, wizardIndex);
//             this.choices.push(wizardChoice);
//         });


//     }

//     getChoices() {
//         return this.choices;
//     }

//     getWizard(value: string): WizardIndex | undefined {
//         return this.wizardsMap.get(value);
//     }

// }


export default () => {
    return new GetWizards();
}
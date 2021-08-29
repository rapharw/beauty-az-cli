import fs from "fs"
import path from "path"
import Choice from "../../../lib/inquirer/choice"
import WizardIndex from "../../wizard-index"

/**
 * 
 * @param {*} dirPath 
 * @param {*} arrayOfFiles 
 * @returns 
 */
const getFiles = (dirPath: string, arrayOfFiles: string[] = []) => {

    arrayOfFiles = arrayOfFiles || []

    const files = fs.readdirSync(dirPath);

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            if (file === 'index.ts') {
                const array = path.join(dirPath, "/", file);
                arrayOfFiles.push(array);
            }
        }
    })
    return arrayOfFiles
}


export default class AzCliOptions {

    static FILE_PATH: string = "src\\app\\wizards\\az-cli\\operations"

    private choices: Choice[] = [];
    // private wizardsMap: Map<string, WizardIndex> = new Map();

    constructor() {

        getFiles(AzCliOptions.FILE_PATH).forEach(element => {

            let indexRequired = require("../" + element.replace("src\\app\\wizards\\az-cli\\", ""));
            console.log(indexRequired);
            // let wizardIndex: WizardIndex = new indexRequired.default();

            // let wizardChoice: Choice = wizardIndex.getChoice();

            // this.wizardsMap.set(wizardChoice.value, wizardIndex);
            // this.choices.push(wizardChoice);
        });


    }

    getChoices() {
        return this.choices;
    }

    getWizard(value: string): WizardIndex | undefined {
        return undefined;
    }

}

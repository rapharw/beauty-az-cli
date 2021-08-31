import fs from "fs"
import path from "path"
import Choice from "../../lib/inquirer/choice"
import WizardIndex from "../wizard-index"

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
            if (file === 'wizard-index.js') {
                const array = path.join(dirPath, "/", file);
                arrayOfFiles.push(array);
            }
        }
    })
    return arrayOfFiles
}


export default class JupiterWizards {

    static FILE_PATH: string = "dist/app/wizards"

    private choices: Choice[] = [];
    private wizardsMap: Map<string, WizardIndex> = new Map();

    constructor() {

        getFiles(JupiterWizards.FILE_PATH).forEach(element => {
            let indexRequired = require("../" + element.replace("dist/app/", ""));
            let wizardIndex: WizardIndex = new indexRequired.default();

            let wizardChoice: Choice = wizardIndex.getChoice();

            this.wizardsMap.set(wizardChoice.value, wizardIndex);
            this.choices.push(wizardChoice);
        });


    }

    getChoices() {
        return this.choices;
    }

    getWizard(value: string): WizardIndex | undefined {
        return this.wizardsMap.get(value);
    }

}

import fs from "fs"
import path from "path"
import Choice from "../../../lib/inquirer/choice"
import OperationIndex from "../../operation-index"

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
            if (file === 'operation-index.ts') {
                const array = path.join(dirPath, "/", file);
                arrayOfFiles.push(array);
            }
        }
    })
    return arrayOfFiles
}


export default class AzCliOperations {

    static FILE_PATH: string = "src\\app\\wizards\\az-cli\\operations"

    private choices: Choice[] = [];
    private operationsMap: Map<string, OperationIndex> = new Map();

    constructor() {

        getFiles(AzCliOperations.FILE_PATH).forEach(element => {
            let indexRequired = require("./" + element.replace("src\\app\\wizards\\az-cli\\", ""));
            
            let operationdIndex: OperationIndex = new indexRequired.default();

            let operationChoice: Choice = operationdIndex.getChoice();

            this.operationsMap.set(operationChoice.value, operationdIndex);
            this.choices.push(operationChoice);
        });


    }

    getChoices() {
        return this.choices;
    }

    getOperation(value: string): OperationIndex | undefined {
        return this.operationsMap.get(value);
    }

}

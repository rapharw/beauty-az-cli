import OperationIndex from "@src/app/operation-index";
import Choice from "@src/lib/inquirer/choice";
import fs from "fs"
import path from "path"

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
            if (file.includes('-operation-index.js')) {
                // console.log("***********");
                // console.log("1"+ "||"+ file);
                // console.log("2"+ "||"+ dirPath);
                // console.log("3"+ "||"+ path.resolve(dirPath, '..'));
                // console.log("3.1"+ "||"+ path.resolve(dirPath, '..', ".."));
                // console.log("4"+ "||"+ path.resolve(dirPath, '.'));
                // console.log("5"+ "||"+ path.resolve(dirPath));
                // console.log("6"+ "||"+ path.resolve(file, '..'));
                // console.log("7"+ "||"+ path.resolve(file, '.'));
                // console.log("8"+ "||"+ path.resolve(file));
                // console.log("9"+ "||"+ path.resolve(path.join(dirPath, "/", file), '..'));
                // console.log("10"+ "||"+ path.resolve(path.join(dirPath, "/", file), '.'));
                // console.log("11"+ "||"+ path.resolve(path.join(dirPath, "/", file)));
                // console.log("RESOLVED: "+ path.join(dirPath, "/", file).replace(path.resolve(dirPath, '..'), ""));
                
                let parentPath = path.resolve(dirPath, '..', "..");
                let filePath = path.resolve(path.join(dirPath, "/", file), '.');
                let replaced = filePath.replace(parentPath, "").replace("/operations","").replace("\\operations","");

                
                arrayOfFiles.push(replaced);
            }
        }
    })
    return arrayOfFiles
}


export default class AzCliGetOperations {

    static FILE_PATH: string = __dirname;

    private choices: Choice[] = [];
    private operationsMap: Map<string, OperationIndex> = new Map();

    constructor() {

        getFiles(AzCliGetOperations.FILE_PATH).forEach(element => {

            let indexRequired = require("." + element);
            
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
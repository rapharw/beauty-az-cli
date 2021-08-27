import fs from "fs"
import path from "path"
import Question from "../../../core/question";

export default () => {

    /**
     * read files recursive except "index.js" file
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
                if (file !== 'index.ts') {
                    const array = path.join(dirPath, "/", file);
                    arrayOfFiles.push(array);
                }
            }
        })
        return arrayOfFiles
    }

    const FILE_PATH = "src\\app\\jupiter-wizard\\questions"
    const options = getFiles(FILE_PATH)

    const arrayOfQuestions: Question[] = [];

    options.forEach(element => {
        let question = require("./" + element.replace(FILE_PATH, ""));
        arrayOfQuestions.push(question.default.get());
    });

    return arrayOfQuestions;
}
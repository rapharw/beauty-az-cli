const fs = require("fs")
const path = require("path")

/**
 * read files inside src/options recursive except "index.js" file and "models" folder 
 * @param {*} dirPath 
 * @param {*} arrayOfFiles 
 * @returns 
 */
const getFiles = function (dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            if (file !== 'models')
                arrayOfFiles = getFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            if (file !== 'index.js'){
                console.log(path.join(dirPath, "/", file));
                arrayOfFiles.push(path.join(dirPath, "/", file))
            }
        }
    })

    return arrayOfFiles
}
const arrayOfOptions = [];

const options = getFiles("src\\options")
/**
 * create "arrayOfOptions" with "Executions" extended options
 */
options.forEach(element => {
    let Option = require("./" + element.replace("src\\options", "") );
    arrayOfOptions.push(new Option());
});

const Options = require("./models/options");
module.exports = new Options(arrayOfOptions);
const clear = require("clear");
const chalk = require('chalk');
const figlet = require('figlet');

const APP_TITLE = process.env.APP_TITLE || 'Beauty  AZ  CLI   =)'

module.exports = () => {

    clear();

    console.log(
        chalk.yellow(
            figlet.textSync(APP_TITLE)
        )
    );
};
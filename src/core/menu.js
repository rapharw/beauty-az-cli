const inquirer = require("../lib/inquirer")
const options = require("../options/index");

module.exports = {

    menu: () => {

        return options.login().then((subscriptions) => {
            this._subscriptions = subscriptions;
            return inquirer.select("option", "Choose an option", options.items());
        });
    },

    selectedMenuOption: (option) => {
        if(this._subscriptions)
            return options.executeOperation(option);
    }
};
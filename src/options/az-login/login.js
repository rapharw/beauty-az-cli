const Operation = require("../models/operation");
const execution = require("../models/command-execution");

class Login extends Operation {
    
    static name = "Login and Get Subscriptions";
    static short = "Login and Get Subscriptions";
    static value = "azureLogin";

    constructor() {
        super(Login.name, Login.short, Login.value);
    }

    /**
     * @override
     */
    execute() {

        return new Promise((resolve, reject) => {
            try {
                let printConsole = false;
                execution('az login --use-device-code', printConsole, (data) => {
                    const arraySubs = eval(data);
                    resolve(
                        arraySubs.map(subscription => {
                            return { name: subscription.name, id: subscription.id }
                        })
                    );
                })
            }
            catch (e) {
                console.log(e);
                reject(new Error("Error on get AZ Login"));
            }
        });

    }

}

module.exports = Login;
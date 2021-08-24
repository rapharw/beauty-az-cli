const Operation = require("../models/operation");
const execution = require("../models/command-execution");

class ResourceGroup extends Operation {
    
    static name = "Show Resource Groups";
    static short = "Show Resource Groups";
    static value = "azureResourceGroup";

    constructor() {
        super(ResourceGroup.name, ResourceGroup.short, ResourceGroup.value);
    }

    /**
     * @override
     */
    execute(subscription) {

        return new Promise((resolve, reject) => {
            try {
                let printConsole = false;
                execution(`az group list --subscription ${subscription}`, printConsole, (data) => {
                    const arrayResourceGroups = eval(data);
                    resolve(
                        arrayResourceGroups.map(resourceGroup => {
                            return { name: resourceGroup.name }
                        })
                    );
                })
            }
            catch (e) {
                console.log(e);
                reject(new Error("Error on get AZ Group"));
            }
        });

    }

}

module.exports = ResourceGroup;
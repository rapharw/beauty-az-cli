const Operation = require("../models/operation");
const execution = require("../models/command-execution");

class Location extends Operation {

    static name = "View all Azure Locations";
    static short = "View all Azure Locations";
    static value = "azureLocations";

    constructor() {
        super(Location.name, Location.short, Location.value);
    }

    /**
     * @override
     */
    execute() {

        return new Promise((resolve, reject) => {
            try {
                let printConsole = false;
                execution('az account list-locations', printConsole, (data) => {
                    const arrayLocations = eval(data);
                    resolve(
                        arrayLocations.map(location => {
                            return { name: location.name, displayName: location.displayName }
                        })
                    );
                    resolve(data);
                })
            }
            catch (e) {
                console.log(e);
                reject(new Error("Error on get AZ Locations"));
            }
        });

    }

}

module.exports = Location;
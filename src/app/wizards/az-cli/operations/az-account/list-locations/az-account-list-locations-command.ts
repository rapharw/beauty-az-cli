import commandExecution from "../../../../../../wizard-options/models/command-execution";
import Location from "./location";

const printConsole = false;

export default () => {
    
    return new Promise<Location[]>((resolve, reject) => {
        try {
            commandExecution('az account list-locations', printConsole, (data: string) => {
                
                const locations: Location[] = JSON.parse(data);
                resolve(
                    locations.map(location => {
                        return { name: location.name, displayName: location.displayName }
                    })
                );
            })
        } 
        catch (e) {
            console.log(e);
            reject(new Error("Error on execute AZ Account List-Locations"))
        }
    })
}
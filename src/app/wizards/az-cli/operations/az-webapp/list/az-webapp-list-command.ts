import commandExecution from "../../../../../../wizard-options/models/command-execution";
import AppService from "../app-service";

const printConsole = false;

export default (resourceGroup: string, subscription: string) => {
    
    return new Promise<AppService[]>((resolve, reject) => {
        try {

            commandExecution(`az webapp list --resource-group "${resourceGroup}" --subscription "${subscription}"`, printConsole, (data: string) => {
                
                const appServices: AppService[] = JSON.parse(data);
                resolve(
                    appServices.map(appService => {
                        return { name: appService.name }
                    })
                );
            })
        } 
        catch (e) {
            console.log(e);
            reject(new Error("Error on execute AZ Webapp list --resource-group $ --subscription $"))
        }
    })
}
import commandExecution from "../../../../../command-execution";
import azCliWarningNotLogged from "../../../az-cli-warning-not-logged";

const printConsole = false;

export default (azLocation: string, keyvault: string, resourceGroup: string, subscription: string) => {
    
    return new Promise<any>((resolve, reject) => {
        try {
            commandExecution(`az keyvault create --location ${azLocation} --name ${keyvault} --resource-group ${resourceGroup} --subscription ${subscription}`, printConsole, (data: string) => {
                console.log(data);
                // const locations: Location[] = JSON.parse(data);
                // resolve(
                //     locations.map(location => {
                //         return { name: location.name, displayName: location.displayName }
                //     })
                // );
                resolve(true);
            },
            azCliWarningNotLogged)
        } 
        catch (e) {
            console.log(e);
            reject(new Error("Error on execute AZ KeyVault Create"))
        }
    })
}
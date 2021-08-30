import commandExecution from "../../../../../command-execution";
import ResourceGroup from "../resource-group";

const printConsole = false;

export default (subscription: string) => {

    return new Promise<ResourceGroup[]>((resolve, reject) => {
        try {
            console.log(subscription);
            commandExecution(`az group list --subscription "${subscription}"`, printConsole, (data: string) => {

                const resourceGroups: ResourceGroup[] = JSON.parse(data);
                resolve(
                    resourceGroups.map(resourceGroup => {
                        return { name: resourceGroup.name }
                    })
                );
            })
        }
        catch (e) {
            console.log(e);
            reject(new Error("Error on execute AZ Group List --Subscription"))
        }
    })
}
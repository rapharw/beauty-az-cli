import commandExecution from "../../../../../../wizard-options/models/command-execution";

const printConsole = false;

export default (resourceGroup: string, subscription: string) => {
    
    return new Promise<Subscription[]>((resolve, reject) => {
        try {

            commandExecution(`az webapp list --resource-group ${resourceGroup} --subscription ${subscription}`, printConsole, (data: string) => {
                
                console.log(data);
                // const subscriptions: Subscription[] = JSON.parse(data);
                // resolve(
                //     subscriptions.map(subscription => {
                //         return new Subscription(subscription.id, subscription.name);
                //     })
                // );
            })
        } 
        catch (e) {
            console.log(e);
            reject(new Error("Error on execute AZ Login"))
        }
    })
}
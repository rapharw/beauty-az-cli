import commandExecution from "../../../../../wizard-options/models/command-execution";
import Subscription from "./subscription";


const printConsole = false;

export default () => {
    
    return new Promise<Subscription[]>((resolve, reject) => {
        try {
            commandExecution('az login --use-device-code', printConsole, (data: string) => {
                
                const subscriptions: Subscription[] = JSON.parse(data);
                resolve(
                    subscriptions.map(subscription => {
                        return new Subscription(subscription.id, subscription.name);
                    })
                );
            })
        } 
        catch (e) {
            console.log(e);
            reject(new Error("Error on execute AZ Login"))
        }
    })
}
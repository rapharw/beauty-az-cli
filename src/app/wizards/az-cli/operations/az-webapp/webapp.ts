import AppService from "./app-service";
import azWebappListCommand from "./list/az-webapp-list-command";
import List from "./list/list";

export default class WebApp implements List{

    constructor(
    ) { }
    
    /**
     * List webapp´s
     * @param subscription 
     * @param resourceGroup 
     * @returns 
     */
     async listAppServices(subscription: string, resourceGroup: string): Promise<AppService[]> {
        return await azWebappListCommand(resourceGroup, subscription);
    }

}

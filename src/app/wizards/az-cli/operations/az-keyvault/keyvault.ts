import azKeyvaultCreateComand from "./create/az-keyvault-create-comand";
import Create from "./create/create";
import azKeyvaultListCommand from "./list/az-keyvault-list-command";
import List from "./list/list";

export default class KeyVault implements List, Create{

    constructor() {
    }
    
    async create(azLocation: string, keyvault: string, resourceGroup: string, subscription: string): Promise<any> {
        return azKeyvaultCreateComand(azLocation, keyvault, resourceGroup, subscription);
    }

    async list(resourceGroup: string, subscription: string): Promise<any> {
        return azKeyvaultListCommand(resourceGroup, subscription);
    }
    
}

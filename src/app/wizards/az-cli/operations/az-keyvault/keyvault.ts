import azKeyvaultListCommand from "./list/az-keyvault-list-command";
import List from "./list/list";

export default class KeyVault implements List{

    constructor() {
    }

    async list(resourceGroup: string, subscription: string): Promise<any> {
        return azKeyvaultListCommand(resourceGroup, subscription);
    }
    
}

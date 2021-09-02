import azKeyvaultCreateComand from "./create/az-keyvault-create-comand";
import Create from "./create/create";
import azKeyvaultListCommand from "./list/az-keyvault-list-command";
import List from "./list/list";
import azKeyvaultSetPolicyCommand from "./set-policy/az-keyvault-set-policy-command";
import Policy from "./set-policy/policy";
import Identity from "../az-webapp/identity/identity";

export default class KeyVault implements List, Create, Policy{
    
    constructor() {
    }

    async setPolicy(identity: Identity, keyvault: string, resourceGroup: string, subscription: string): Promise<any> {
        return azKeyvaultSetPolicyCommand(identity, keyvault, resourceGroup, subscription);
    }
    
    async create(azLocation: string, keyvault: string, resourceGroup: string, subscription: string): Promise<any> {
        return azKeyvaultCreateComand(azLocation, keyvault, resourceGroup, subscription);
    }

    async list(resourceGroup: string, subscription: string): Promise<any> {
        return azKeyvaultListCommand(resourceGroup, subscription);
    }
    
}

import Create from "./create/create";

export default class KeyVault implements Create {

    constructor() {
    }
    create(azLocation: string, keyvault: string, resourceGroup: string, subscription: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}

import AppService from "./app-service";
import AssignIdentity from "./identity/assign-identity";
import azWebappIdentityAssignCommand from "./identity/az-webapp-identity-assign-command";
import Identity from "./identity/identity";
import azWebappIdentityShowCommand from "./identity/az-webapp-identity-show-command";
import ShowIdentity from "./identity/show-identity";
import azWebappListCommand from "./list/az-webapp-list-command";
import List from "./list/list";
import ConfigAppSettings from "./config/config-appsettings";
import environmentVariable from "./config/environment-variable";
import azWebappConfigAppsettingsListCommand from "./config/az-webapp-config-appsettings-list-command";

export default class WebApp implements List, AssignIdentity, ShowIdentity, ConfigAppSettings {

    constructor(
    ) { }

    async listEnvironmentVariables(appService: string, subscription: string, resourceGroup: string): Promise<environmentVariable[]> {
        return await azWebappConfigAppsettingsListCommand(appService, resourceGroup, subscription);
    }
    
    /**
     * List webapp´s
     * @param subscription 
     * @param resourceGroup 
     * @returns 
     */
     async listAppServices(subscription: string, resourceGroup: string): Promise<AppService[]> {
        return await azWebappListCommand(resourceGroup, subscription);
    }

    /**
     * Enable identity for an AppService
     * @param appServiceName
     * @param resourceGroup 
     * @param subscription 
     * @returns 
     */
    async assign(appServiceName: string, resourceGroup: string, subscription: string): Promise<Identity> {
        return await azWebappIdentityAssignCommand(appServiceName, resourceGroup, subscription);
    }

    /**
     * Show identity of an AppService
     * @param appServiceName 
     * @param resourceGroup 
     * @param subscription 
     */
    async show(appServiceName: string, resourceGroup: string, subscription: string): Promise<Identity> {
        return await azWebappIdentityShowCommand(appServiceName, resourceGroup, subscription);
    }

}

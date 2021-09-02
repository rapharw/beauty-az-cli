import EnvironmentVariable from "./environment-variable";

export default interface ConfigAppSettings {

    listEnvironmentVariables(appService: string, subscription: string, resourceGroup: string): Promise<EnvironmentVariable[]>;
}
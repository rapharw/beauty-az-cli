import Subscription from "../az-login/subscription";
import azAccountListLocationsCommand from "./list-locations/az-account-list-locations-command";
import ListLocations from "./list-locations/list-locations";
import azAccountListCommand from "./list/az-account-list-command";

export default class Account implements ListLocations {

    constructor() {
    }

    listLocations(): void {
        azAccountListLocationsCommand();
    }

    async getSubscriptions(): Promise<Subscription[]> {
        return await azAccountListCommand();
    }
    
}

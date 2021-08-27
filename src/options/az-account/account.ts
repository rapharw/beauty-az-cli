import azAccountListLocationsCommand from "./list-locations/az-account-list-locations-command";
import ListLocations from "./list-locations/list-locations";

export default class Account implements ListLocations {

    constructor() {
    }

    listLocations(): void {
        azAccountListLocationsCommand().then(locations => console.log(locations));
    }
    
}

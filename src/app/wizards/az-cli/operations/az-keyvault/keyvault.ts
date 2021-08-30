import Create from "./create/create";

export default class KeyVault implements Create {

    constructor() {
    }

    listLocations(): void {
        azAccountListLocationsCommand().then(locations => console.log(locations));
    }
    
}

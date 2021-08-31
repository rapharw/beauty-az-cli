import Choice from "../../../../../../lib/inquirer/choice";
import OperationIndex from "../../../../../operation-index";
import Account from "../account";
import Location from "./location";

export default class AzCliAzAccountListLocationsOperationIndex  extends OperationIndex{

    getChoice(): Choice {
        return new Choice(
            `${process.env.AZCLI_AZ_ACCOUNT_LISTLOCATIONS_CHOICE_NAME}`,
            `${process.env.AZCLI_AZ_ACCOUNT_LISTLOCATIONS_CHOICE_SHORT}`,
            `${process.env.AZCLI_AZ_ACCOUNT_LISTLOCATIONS_CHOICE_VALUE}`);
    }

    async execute () {

        const account = new Account();
        account.listLocations().then(Locations => console.log(Locations));
    }

}
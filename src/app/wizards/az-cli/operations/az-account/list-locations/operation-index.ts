import Choice from "../../../../../../lib/inquirer/choice";
import OperationIndex from "../../../../../operation-index";
import Account from "../account";

export default class AzCliAzAccountListLocationsOperationIndex  extends OperationIndex{

    getChoice(): Choice {
        return new Choice(
            `${process.env.AZCLI_AZ_ACCOUNT_LISTLOCATIONS_CHOICE_NAME}`,
            `${process.env.AZCLI_AZ_ACCOUNT_LISTLOCATIONS_CHOICE_SHORT}`,
            `${process.env.AZCLI_AZ_ACCOUNT_LISTLOCATIONS_CHOICE_VALUE}`);
    }

    execute (): void {
        const account = new Account();
        account.listLocations();
    }

}
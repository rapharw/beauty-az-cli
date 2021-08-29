import Choice from "../../../lib/inquirer/choice";
import WizardIndex from "../../wizard-index";
import AzCliApp from "./az-cli-app";


export default class AzCliWizardIndex extends WizardIndex {

    getChoice(): Choice {
        return new Choice(
            `${process.env.APP_WIZARD_AZCLI_CHOICE_NAME}`,
            `${process.env.APP_WIZARD_AZCLI_CHOICE_SHORT}`,
            `${process.env.APP_WIZARD_AZCLI_CHOICE_VALUE}`);
    }

    execute (): void {
        const azCliApp = new AzCliApp();
        azCliApp.execute();
    }

}
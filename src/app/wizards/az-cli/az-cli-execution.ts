import ApplicationExecution from "../../application-execution";
import WizardIndex from "../../wizard-index";
import azCliHeader from "./az-cli-header";
import AzCliOptions from "./az-cli-options";

export default class AzCliExecution implements ApplicationExecution {

    /**
     * @override
     */
    showHeader(): void {
        azCliHeader().show('blue');
    }


    /**
     * @override
     */
    async showQuestions(): Promise<WizardIndex | undefined> {
        console.log("showQuestions az-cli");

        const azCliOptions = new AzCliOptions();
        // const jupiterWizard = new JupiterWizardsV2();

        // const question = jupiterQuestions(jupiterWizard.getChoices());

        // const resultSelectionQuestion = await question.ask();

        // const wizardIndex = jupiterWizard.getWizard(resultSelectionQuestion.selection);

        // return wizardIndex;

        return undefined;
    }


    /**
     * @override
     */
    performSelection(wizardIndex: WizardIndex): void {
        console.log("performSelection azcli")
    }

}

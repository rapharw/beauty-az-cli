import ApplicationExecution from "../../application-execution";
import OperationIndex from "../../operation-index";
import WizardIndex from "../../wizard-index";
import azCliHeader from "./az-cli-header";
import AzCliOperations from "./az-cli-operations";
import azCliQuestions from "./az-cli-questions";

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

        const azCliOperations = new AzCliOperations();
        
        const question = azCliQuestions(azCliOperations.getChoices());
        
        const resultSelectionQuestion = await question.ask();
        
        const operationIndex = azCliOperations.getOperation(resultSelectionQuestion.selection);

        return operationIndex;
    }


    /**
     * @override
     */
    performSelection(operationIndex: OperationIndex): void {
        if (operationIndex) {
            operationIndex.execute();
        }
        else
            throw new Error("Something went wrong on performSelection OperationIndex [az-cli] !!!")
    }

}

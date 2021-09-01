import ApplicationExecution from "../../application-execution";
import OperationIndex from "../../operation-index";
import azCliHeader from "./az-cli-header";
import GetOperations from "./get-operations";
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
    async showQuestions(): Promise<OperationIndex | undefined> {
        
        const azCliGetOperations = GetOperations();
        
        const question = azCliQuestions(azCliGetOperations.getChoices());
        
        const resultSelectionQuestion = await question.ask();
        
        const operationIndex = azCliGetOperations.getOperation(resultSelectionQuestion.selection);

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

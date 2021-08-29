import Answer from "./answer";
import Question from "./question";

export default interface WizardExecution {

    showHeader(): void;
    showQuestions(questions: Question[]): Promise<Answer[]>;
    performSelection(answers: Answer[]): void;
}
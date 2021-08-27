import Question from "./question";

export default interface WizardExecution {
    showHeader(): void;
    showQuestions(questions: Question[]): Promise<any>;
    performSelectionQuestions(any: any): void;
}
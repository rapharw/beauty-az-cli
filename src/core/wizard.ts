import WizardExecution from "./wizard-execution";
import Question from "./question";

export default abstract class Wizard {

    private questions: Question[] = [];

    constructor() { }

    addQuestion(questions: Question[]) {
        this.questions = questions;
    }

    async execute(wizardExecution: WizardExecution) {

        console.log("[wizard] show header");
        wizardExecution.showHeader();

        console.log("[wizard] Showing Question(s)");
        const answer = await wizardExecution.showQuestions(this.questions);

        wizardExecution.performSelectionQuestions(answer);
    }
}
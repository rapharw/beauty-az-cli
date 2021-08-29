import WizardExecution from "./wizard-execution";
import Question from "./question";

export default abstract class Wizard {

    private questions: Question[] = [];

    constructor() { }

    addQuestion(questions: Question[]) {
        this.questions = questions;
    }

    async execute(wizardExecution: WizardExecution) {

        wizardExecution.showHeader();

        const answers = await wizardExecution.showQuestions(this.questions);

        wizardExecution.performSelection(answers);
    }
}
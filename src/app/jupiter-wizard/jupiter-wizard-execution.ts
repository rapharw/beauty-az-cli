import ExecutionWizard from "../../core/wizard-execution";
import chalk from 'chalk';
import figlet from 'figlet';
import Question from "../../core/question";
import JupiterWizardAnswers from "./jupiter-wizard-answers";

export default class JupiterWizardExecution implements ExecutionWizard {

    showHeader(): void {
        console.log(
            chalk.yellow(
                figlet.textSync(process.env.APP_TITLE || 'Beauty AZ CLI  =)')
            )
        );
    }

    async showQuestions(questions: Question[]): Promise<any> {

        const jupiterWizardAnswers: JupiterWizardAnswers = new JupiterWizardAnswers();

        for (let question of questions) {
            const answer = await question.ask();
            jupiterWizardAnswers.addAnswer(answer);
        }

        return jupiterWizardAnswers;
    }


    performSelectionQuestions(any: any): void {
        console.log(any);
    }
}
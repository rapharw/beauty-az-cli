import chalk from 'chalk';
import figlet from 'figlet';
import WizardExecution from "../../core/wizard-execution";
import Question from "../../core/question";
import Answer from "../../core/answer";

export default class JupiterWizardExecution implements WizardExecution {


    /**
     * @override
     */
    showHeader(): void {
        console.log(
            chalk.yellow(
                figlet.textSync(process.env.APP_TITLE || 'Beauty AZ CLI  =)')
            )
        );
    }


    /**
     * @override
     */
    async showQuestions(questions: Question[]): Promise<Answer[]> {

        const answers: Answer[] = [];
        for (let question of questions) {
            const answer = await question.ask();
            answers.push(answer);
        }

        return answers;
    }


    /**
     * @override
     */
     performSelection(answers: Answer[]): void {
        console.log(answers);
    }
}
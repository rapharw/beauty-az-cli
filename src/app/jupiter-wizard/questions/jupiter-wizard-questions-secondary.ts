import Question from "../../../core/question";
import Choice from "../../../lib/inquirer/choice";

export default {

    get() {

        const choices: Choice[] = [];

        const choice1 = new Choice("SEC 1", "SEC 1", "sec1");
        const choice2 = new Choice("SEC 2", "SEC 2", "sec2");

        choices.push(choice1);
        choices.push(choice2);

        return new Question("wizardSec", "Choose a Secondary", choices);
    }
}
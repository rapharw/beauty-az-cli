import Question from "../../../core/question";
import Choice from "../../../lib/inquirer/choice";

export default {

    get() {

        const choices: Choice[] = [];

        const choice1 = new Choice("AZ CLI", "az-cli", "az-cli");
        const choice2 = new Choice("AZ DEVOPS CLI", "az-devops-cli", "az-devops-cli");

        choices.push(choice1);
        choices.push(choice2);

        return new Question("wizardOption", "Choose a wizard", choices);
    }
}
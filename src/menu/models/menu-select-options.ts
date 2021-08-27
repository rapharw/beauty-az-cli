import Choice from "../../lib/inquirer/choice";
import Confirm from "./confirm";
import Execution from "./execution";
import Operation from "./operation";
import Option from "./option";
import Question from "./question";

export default class MenuSelectOptions {

    constructor(){}

    async readOptionsMenu(){
        console.log("Reading Options Menu");

        const choices = [];
        const choice = new Choice("Create Key Vault", "create-key-vault", "az-keyvault");
        
        const questions = [];
        const question1 = new Question("keyVault", "Select the resource group");
        
        choices.push(choice);
        
        // await question1.select(choices);
        questions.push(question1);

        const confirm = new Confirm();

        const executions = [];
        const execution1 = new Execution();

        executions.push(execution1);

        const operation = new Operation(questions, confirm, executions);

        const option = new Option(choice, operation);

        option.executeOperation(choices);

    }
};

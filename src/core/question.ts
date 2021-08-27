import inquirer from "../lib/inquirer/inquirer";
import Choice from "../lib/inquirer/choice";

export default class Question {

    constructor(private name: string, private message: string, private choices: Choice[]) {

    }

    async ask(){
        return inquirer.select(this.name, this.message, this.choices);
    }
    /*
    const choices: Choice [] = [];

const choice1 = new Choice("nameChoice1", "shortChoice1", "valueChoice1");
const choice2 = new Choice("nameChoice2", "shortChoice2", "valueChoice2");

choices.push(choice1);
choices.push(choice2);

async function opa(){
    const result = await inquirer.select("name1", "message 1", choices);
    console.log(result);
}

opa();
*/
}
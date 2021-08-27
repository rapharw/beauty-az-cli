import Choice from "../../lib/inquirer/choice";
import inquirer from "../../lib/inquirer/inquirer";

export default class Question {

    constructor(public name: string, public message: string){
    }

    select(choices: Choice[]){

        return inquirer.select(this.name, this.message, choices);
    }

}
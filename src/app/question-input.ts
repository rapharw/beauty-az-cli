import inquirer from "../lib/inquirer/inquirer";
import Question from "./question";

export default class QuestionInput extends Question {

    constructor(public name: string, public message: string, public validation: Function){
        super(name, message);
    }
    
    async ask(): Promise<any>{
        return inquirer.inputText(this.name, this.message, this.validation);
    }
}
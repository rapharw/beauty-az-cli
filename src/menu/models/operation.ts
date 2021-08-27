import Choice from "../../lib/inquirer/choice";
import Confirm from "./confirm";
import Execution from "./execution";
import Question from "./question";

export default class Operation {

    constructor(public questions: Question[], public confirm: Confirm, public executions: Execution[]){

    }

    execute(choices: Choice[]){

        console.log(choices);

        // show questions
        if(this.questions && this.questions.length > 0){
            console.log("show questions")

            
        }


        // show confirm
        if(this.confirm){
            console.log("show confirm");
        }


        // perform executions
        if(this.executions){
            console.log("perform executions");
        }

    }
}

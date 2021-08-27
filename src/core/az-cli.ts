import Question from "./question";

export default class AzCLI {

    constructor(private questions: Question[]){

    }
    
    execute(){

        console.log("[az-cli] show header");

        console.log("[az-cli] login()")

        console.log("[az-cli] Showing Question(s)");
        if(this.questions){
            console.log("[az-cli] Question(s) - OK");
        }

        console.log("[az-cli] Perform selection of Question(s)");

    }
}
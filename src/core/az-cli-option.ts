import Question from "./question";

export default class AzCLIOption {

    constructor(private questions: Question[]){

    }
    
    execute(){

        console.log("[az-cli-options] Showing Question(s)");
        if(this.questions){
            console.log("[az-cli-options] Question(s) - OK");
        }

        console.log("[az-cli-options] confirm");

        console.log("[az-cli-options] Perform selection of Question(s)");

    }
}
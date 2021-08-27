import Answer from "./answer";

export default abstract class WizardAnswers {

    private answers: Answer [] = [];

    constructor(){

    }

    addAnswer(answer: Answer){
        this.answers.push(answer);
    }
}
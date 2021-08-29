import Answer from "../../core/answer";
import WizardAnswers from "../../core/wizard-answers";

export default class JupiterWizardAnswers extends WizardAnswers{
    
    executeSelection(answer: Answer) {
        console.log(answer);
    }
    
}
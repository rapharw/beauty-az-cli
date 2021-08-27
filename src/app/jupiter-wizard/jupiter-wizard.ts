import Wizard from "../../core/wizard";
import JupiterWizardQuestions from "./questions/index";

export default class JupiterWizard extends Wizard{
    
    constructor(){
        super();
        this.addQuestion(JupiterWizardQuestions());
    }    
}
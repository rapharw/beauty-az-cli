import JupiterWizard from "./jupiter-wizard/jupiter-wizard";
import JupiterWizardExecution from "./jupiter-wizard/jupiter-wizard-execution";

export default class JupiterApp{

    private jupiterWizardExecution: JupiterWizardExecution = new JupiterWizardExecution();

    execute(){
        const jupiterWizard = new JupiterWizard();
        jupiterWizard.execute(this.jupiterWizardExecution);
    }
}
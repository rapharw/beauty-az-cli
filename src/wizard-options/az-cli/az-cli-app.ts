export default class AzCLIApp{

    execute(){
        const jupiterWizard = new JupiterWizard();
        jupiterWizard.execute(this.jupiterWizardExecution);
    }
}
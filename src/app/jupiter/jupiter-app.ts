import Application from "../application";
import JupiterExecution from "./jupiter-execution";

export default class JupiterApp extends Application {

    private jupiterExecution: JupiterExecution = new JupiterExecution();

    constructor() {
        super();
        super.applicationExecution(this.jupiterExecution);
    }

}

import Choice from "../../lib/inquirer/choice";
import Operation from "./operation";

export default class Option {

    constructor(public choice: Choice, public operation: Operation){}

    executeOperation(choices: Choice[]){
        console.log("executeOperation");

        this.operation.execute(choices);
    }
};

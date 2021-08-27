import Choice from "inquirer/lib/objects/choice";
import Operation from "./operation";

export default interface Option {

    getChoice(): Choice;
    getOperation(): Operation;
}
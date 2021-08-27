import AzCLI from "./az-cli";
import AzCLIOption from "./az-cli-option";
import Question from "./question";
import Wizard from "./wizard";

function wizardMock(){
    const questions: Question[] = [];
    const question1 = new Question();
    questions.push(question1);

    return new Wizard(questions);
}


function azCli(){
    const questions: Question[] = [];
    const question1 = new Question();
    questions.push(question1);

    return new AzCLI(questions);
}


function azCLIOption(){
    const questions: Question[] = [];
    const question1 = new Question();
    questions.push(question1);

    return new AzCLIOption(questions);
}

const wizard = wizardMock();
wizard.execute();
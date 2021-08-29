export default abstract class Option {

    constructor(){

    }

    abstract header(): void;
    abstract login(): void;
    abstract executeQuestions(): void;
    abstract answer(): void;
    abstract confirm(): void;
    abstract executeOperation(): void;
}
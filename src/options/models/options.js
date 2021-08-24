const Login = require("../az-login/login");

class Options {

    constructor(operations){
        this.operations = operations;
    }


    /**
     * 
     * @returns An array of "Operation" choices
     */
    items(){
        return this.operations.map(operation => {
            return operation.choices;
        })
    }


    login(){
        let loginOption = this.operations.find(operation => {
            return operation.choices.value == Login.value;
        });
        return loginOption.execute();
    }


    isLogged(){
        return this.login !== null && this.login !== undefined;
    }
    

    executeOperation(operationToExecute){
        let operation = this.operations.find(operation => {
            return operation.choices.value == operationToExecute.option;
        });
        return operation.execute().then(data=> {
            console.log(data); 
            return data
        });
    }
}

module.exports = Options
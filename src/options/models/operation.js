class Operation {

    /**
     * 
     * @param {*} name display in list
     * @param {*} short display after selection
     * @param {*} value save in the answers hash
     */
    constructor(name, short, value){
        this.choices = { name, short, value };
    }

    getChoices(){
        return this.choices;
    }

    execute(){
        throw new Error(`Implement your own Method!`);
    }
}

module.exports = Operation
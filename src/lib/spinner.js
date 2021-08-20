const CLI = require('clui');

class Spinner {

    constructor(textSpinner){
        this._status = new CLI.Spinner(textSpinner);
    }

    start(){
        this._status.start();
    }

    stop(){
        this._status.stop();
    }
}

module.exports = Spinner
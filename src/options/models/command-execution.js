const { exec } = require("child_process");

module.exports = (command, print, callback) => {
    
    const execCmd = exec(command);
    execCmd.stdout.on('data', (data) => {
        if(print)
            console.log(data);
            
        callback(data);
    });
    
    execCmd.stderr.on('data', (data) => {
        console.log(data);
    });
}
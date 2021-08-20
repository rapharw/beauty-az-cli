const chalk = require('chalk');
const clear  = require( 'clear');
const figlet  = require( 'figlet');
const inquirer  = require( './lib/inquirer');

clear();

console.log(
    chalk.yellow(
        figlet.textSync('My Beauty CLI   =)')
    )
);



// const run = async () => {
    
//     const ignore = await inquirer.askIgnoreFiles(['opa', 'teste']);
//     console.log(ignore);


//     const credentials = await inquirer.askGithubCredentials();
//     console.log(credentials);
// };

// run();




// :::::         :::::
// ::::: SPINNER :::::
// :::::         :::::
// const Spinner = require("./lib/spinner");
// const spin = new Spinner('Teste');
// spin.start();

// setTimeout(() => {
//     spin.stop();
// }, 4000);


const exec = require('child_process').exec;
const azLogin = exec('sh src/az-login.sh');
azLogin.stdout.on('data', (data)=>{
    console.log(data); 
    // do whatever you want here with data
});
azLogin.stderr.on('data', (data)=>{
    console.error(data);
});



const showLocations = exec('sh src/az-locations.sh');
const Spinner = require("./lib/spinner");
const spin = new Spinner('Loading locations');
spin.start();

setTimeout(() => {
    spin.stop();
}, 4000);

showLocations.stdout.on('data', (data)=>{
    console.log(data); 
    // do whatever you want here with data
});
showLocations.stderr.on('data', (data)=>{
    console.error(data);
});
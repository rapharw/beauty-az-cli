require('dotenv').config()

import JupiterApp from "./app/jupiter-app";
import clear from "clear";

clear();

new JupiterApp().execute();










// import inquirer from "./lib/inquirer/inquirer";
// import Choice from "./lib/inquirer/choice";
// import { black } from "chalk";

// const choices: Choice [] = [];

// const choice1 = new Choice("nameChoice1", "shortChoice1", "valueChoice1");
// const choice2 = new Choice("nameChoice2", "shortChoice2", "valueChoice2");

// choices.push(choice1);
// choices.push(choice2);

// async function opa(){
//     const result = await inquirer.select("name1", "message 1", choices);
//     console.log(result);
// }

// opa();




// import Login from "./options/az-login/login"
// console.log(Reflect.has(Login.prototype, 'execute'))
// console.log(Reflect.ownKeys(Login));
// console.log(typeof Login.prototype);




// require('dotenv').config()

// import header from "./menu/header";
// header.show();

// import menu from "./menu/menu"
// menu.show();






// import { login, menu, selectedMenuOption } from "./core/manager.js";

// login().

// menu()
//     .then((option) => selectedMenuOption(option))
//     .then(() => console.log("Finish"));






















//  const run = async () => {

//     const ignore = await inquirer.askIgnoreFiles(['opa', 'teste']);
//     console.log(ignore);


//     const credentials = await inquirer.askGithubCredentials();
//     console.log(credentials);
// };

// run();










// const exec = require('child_process').exec;

// const azLogin = async () => {

//     const azLogin = exec('ls');
//     azLogin.stdout.on('data', (data) => {
//         const arraySubs = eval(data);

//         const subscriptions = arraySubs.map(subscription => {
//             return {name: subscription.name, id: subscription.id}
//         })

//         console.log(subscriptions);

//         azLocations();
//     });
//     azLogin.stderr.on('data', (data) => {
//         console.error(data);
//     });
// };

// azLogin();



// const azLocations = async () => {
//     console.log("AZ Locations");
//     const showLocations = exec('sh src/az-locations.sh');
    
//     showLocations.stdout.on('data', (data) => {
//         console.log(data);
//     });
//     showLocations.stderr.on('data', (data) => {
//         console.error(data);
//     });
// };









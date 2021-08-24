require('dotenv').config()

const header = require("./core/header");
const { menu, selectedMenuOption } = require("./core/menu");

header();

menu()
    .then(option => selectedMenuOption(option))
    .then(() => console.log("Finish"));






















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









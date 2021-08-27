// import clear from "clear";
// import chalk from 'chalk';
// import figlet from 'figlet';

// export default class Header {

//     appTitle: string = process.env.APP_TITLE || 'Beauty AZ CLI  =)'

//     constructor(){

//     }

//     execute(){
//         clear();

//         console.log(
//             chalk.yellow(
//                 figlet.textSync(this.appTitle)
//             )
//         );
//     }
// }






import clear from "clear";
import chalk from 'chalk';
import figlet from 'figlet';

export default {
    
    show(): void {
        
        clear();

        console.log(
            chalk.yellow(
                figlet.textSync(process.env.APP_TITLE || 'Beauty AZ CLI  =)')
            )
        );
    }
}
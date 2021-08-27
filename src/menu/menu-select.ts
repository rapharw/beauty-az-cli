import Subscription from "../options/az-login/subscription";
import MenuSelectOptions from "./models/menu-select-options";

export default {

    async select(subscriptions: Subscription[]){
        
        stillOnMenu: while(true){

            console.log(subscriptions);
            
            new MenuSelectOptions().readOptionsMenu();
            
            console.log("// execute");

            console.log("// continue? (Y/n)");

            break stillOnMenu;
        }
    }
};

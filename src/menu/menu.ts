import Login from "../options/az-login/login";
import menuSelect from "./menu-select";

export default {

    async show(){
        
        const login = new Login();
        await login.execute();

        if(login.subscriptions.length > 0){
            
            menuSelect.select(login.subscriptions);
        }
        else{

            console.log("Not logged");
        }
    }
};

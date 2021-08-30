import List from "./list/list";

export default class WebApp implements List{

    
    constructor(
    ) { }

    list(subscription: string): Promise<any> {
        console.log(subscription);
        return Promise.resolve("");
    }
}

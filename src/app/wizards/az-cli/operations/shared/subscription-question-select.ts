
import Choice from "../../../../../lib/inquirer/choice";
import Question from "../../../../question";
import QuestionSelect from "../../../../question-select";
import Account from "../az-account/account";
import Subscription from "../az-login/subscription";

/**
 * Know how to get the question(s)
 */
export default (): Promise<Question> => {
    
    const choices: Choice[] = [];

    const account = new Account();

    return new Promise((resolve, reject) => {

        account.getSubscriptions().then((subscriptions: Subscription[]) => {
            
            for(let subscription of subscriptions){
                choices.push(new Choice(subscription.name, subscription.name, subscription.name));
            }
            
            resolve(new QuestionSelect("subscription", "Select a subscription", choices));
        })
        .catch((err) => {
            console.log(err);
            reject(new Error("Error on Subscription-Question-Select"))
        });
    });
}

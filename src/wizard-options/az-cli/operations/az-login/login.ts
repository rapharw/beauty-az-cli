import Execution from "../../menu/models/execution";
import azLogin from "./az-login-command";
import Subscription from "./subscription";

export default class Login implements Execution {

    subscriptions: Subscription[] = []

    constructor(
    ) { }

    /**
     * @override
     */
    async execute() {
        const subscriptions = await azLogin();
        this.subscriptions = subscriptions;
    }
}

import Execution from "../../../../../menu/models/execution";
import Subscription from "../../../../../wizard-options/az-cli/operations/az-login/subscription";
import azLogin from "./az-login-command";

export default class Login implements Execution {

    constructor(
    ) { }

    /**
     * @override
     */
    async execute() {
        const subscriptions = await azLogin();
        return subscriptions;
    }
}

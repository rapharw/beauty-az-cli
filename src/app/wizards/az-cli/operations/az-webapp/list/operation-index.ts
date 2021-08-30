import Choice from "../../../../../../lib/inquirer/choice";
import OperationIndex from "../../../../../operation-index";
import subscriptionQuestionSelect from "../../shared/subscription-question-select";
import WebApp from "../webapp";

export default class AzCliAzWebAppListOperationIndex extends OperationIndex {

    getChoice(): Choice {
        return new Choice(
            `${process.env.AZCLI_AZ_WEBAPP_LIST_CHOICE_NAME}`,
            `${process.env.AZCLI_AZ_WEBAPP_LIST_CHOICE_SHORT}`,
            `${process.env.AZCLI_AZ_WEBAPP_LIST_CHOICE_VALUE}`);
    }


    async execute(): Promise<any> {
        const result = await subscriptionQuestionSelect();
        
        const ask = await result.ask();
        
        const webbApp = new WebApp();
        await webbApp.list(ask);
    }

}
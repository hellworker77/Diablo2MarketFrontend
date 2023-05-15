import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";
import {BaseEndpoint} from "../BaseEndpoint";

type Params = {
    userId: string
}

export class GetUserDealsCountRequestManager extends AbstractRequestManager<number, Params>{
    buildConfig(params: Params): void {
        this.config = {
            method: this.method,
            url: this.url,
            params: {
                "userId": params.userId
            }
        }
    }

    protected method = "get";
    protected readonly url = BaseEndpoint + "Deal/userDealsCount";

}
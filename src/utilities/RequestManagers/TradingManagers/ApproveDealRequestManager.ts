import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";
import {Token} from "../../TokenManager";
import {BaseEndpoint} from "../BaseEndpoint";

type Params = {
    token: Token
    dealId: string
}

export class ApproveDealRequestManager extends AbstractRequestManager<any, Params>{
    buildConfig(params: Params): void {
        this.config = {
            url: this.url,
            method: this.method,
            params:{
                dealId: params.dealId
            },
            headers:{
                "Authorization": `${params.token.token_type} ${params.token.access_token}`
            }
        }
    }

    protected method = "put";
    protected readonly url = BaseEndpoint + "Deal/approve";

}
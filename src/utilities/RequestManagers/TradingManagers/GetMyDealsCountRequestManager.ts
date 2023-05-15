import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";
import {BaseEndpoint} from "../BaseEndpoint";
import {Token} from "../../TokenManager";

type Params = {
    token: Token
}

export class GetMyDealsCountRequestManager extends AbstractRequestManager<number, Params>{
    buildConfig(params: Params): void {
        this.config = {
            method: this.method,
            url: this.url,
            headers:{
                "Authorization": `${params.token?.token_type} ${params.token?.access_token}`
            }
        }
    }

    protected method = "get";
    protected readonly url = BaseEndpoint + "Deal/ownDealsCount";
}
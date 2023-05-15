import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";
import {Token} from "../../TokenManager";
import {BaseEndpoint} from "../BaseEndpoint";

type Params = {
    token: Token
    itemId: string
}

export class CreateDealRequestManager extends AbstractRequestManager<any, Params>{
    buildConfig(params: Params): void {
        this.config = {
            url: this.url,
            method: this.method,
            params: {
                "itemId": params.itemId
            },
            headers: {
                "Authorization": `${params.token.token_type} ${params.token.access_token}`
            }
        }
    }

    protected method = "post";
    protected readonly url = BaseEndpoint + "Deal/create";
}
import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";
import {Token} from "../../TokenManager";
import {BaseEndpoint} from "../BaseEndpoint";

type Params = {
    token: Token,
    amount: number
}

export class IncreaseBalanceRequestManager extends AbstractRequestManager<null, Params>{
    buildConfig(params: Params): void {
        this.config = {
            url : this.url,
            method: this.method,
            params: {
                "amount": params.amount
            },
            headers: {
                "Authorization": `${params.token.token_type} ${params.token.access_token}`
            }
        }
    }

    protected method = "put";
    protected readonly url = BaseEndpoint + "Account/encreaseBalance";
}
import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";
import {ApplicationUserType} from "../../../types/models/ApplicationUserType";
import {BaseEndpoint} from "../BaseEndpoint";
import {Token} from "../../TokenManager";

type Params = {
    token: Token
}

export class GetMeRequestManager extends AbstractRequestManager<ApplicationUserType, Params> {
    buildConfig(params: Params): void {
        this.config = {
            method: this.method,
            url: this.url,
            headers: {
                "Authorization": `${params.token.token_type} ${params.token.access_token}`
            }
        }
    }
    protected readonly url = BaseEndpoint + "Account/me";
    protected method = "get";
}



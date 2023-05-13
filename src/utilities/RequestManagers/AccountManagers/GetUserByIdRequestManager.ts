import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";
import {ApplicationUserType} from "../../../types/models/ApplicationUserType";
import {BaseEndpoint} from "../BaseEndpoint";

type Params = {
    userId: string
}

export class GetUserByIdRequestManager extends AbstractRequestManager<ApplicationUserType, Params> {
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
    protected readonly url = BaseEndpoint + "Account/id"
}
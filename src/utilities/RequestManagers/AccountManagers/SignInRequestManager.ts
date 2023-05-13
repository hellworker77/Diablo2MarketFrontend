import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";
import {Token, TokenManager} from "../../TokenManager";
import {NotifyPropsOwn} from "../../../types/props/NotificationProps";
import {AuthorizationEndpoint} from "../BaseEndpoint";

type Params = {
    username: string,
    password: string
}

export class SignInRequestManager extends AbstractRequestManager<Token, Params> {
    constructor(notificationCallback: (notification: NotifyPropsOwn) => void,
                source: string,
                clientId: string = "Api",
                clientSecret: string = "client_secret",
                allowedScope: string = "account",
                grantType: string = "password") {
        super(notificationCallback, source);
        this.clientId = clientId
        this.clientSecret = clientSecret
        this.allowedScope = allowedScope
        this.grantType = grantType
    }

    buildConfig(params: Params): void {
        let body = new URLSearchParams()

        body.append('client_id', this.clientId);
        body.append('client_secret', this.clientSecret);
        body.append('AllowedScopes', this.allowedScope);
        body.append('grant_type', this.grantType);
        body.append('password', params.password);
        body.append('username', params.username);

        this.config = {
            method: this.method,
            url: this.url,
            data: body
        }
    }

    protected loadData(data: Token, callback: (data: Token) => void) {
        super.loadData(data, callback);
        TokenManager.save(data)
    }

    private readonly clientId: string;
    private readonly clientSecret: string;
    private readonly allowedScope: string;
    private readonly grantType: string;

    protected method = "post";
    protected readonly url = AuthorizationEndpoint;


}
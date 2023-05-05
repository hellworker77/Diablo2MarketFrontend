import {AuthorizationEndpoint} from "../BaseUrl";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {Token, TokenAllowedScopes} from "../../TokenManager";



type responseType = Token

type requestData = {
    username: string,
    password: string
}

export class SignInRequestManager {
    private readonly _config: AxiosRequestConfig<responseType>;
    private readonly _body: URLSearchParams;

    constructor() {
        this._body = new URLSearchParams();

        const config: AxiosRequestConfig = {
            method: "post",
            url: AuthorizationEndpoint,
            data: this._body
        };
        this._config = config;
    }
    public createBody = (data: requestData, scope: TokenAllowedScopes) => {
        this._body.append('client_id', 'Api');
        this._body.append('client_secret', 'client_secret');
        this._body.append('AllowedScopes', scope);
        this._body.append('grant_type', 'password');
        this._body.append('password', data.password);
        this._body.append('username', data.username);
    }

    public getResponse = (): Promise<AxiosResponse<responseType>> => {
        return axios<responseType>(this._config);
    }
}
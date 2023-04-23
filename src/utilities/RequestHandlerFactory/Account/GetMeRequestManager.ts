import {BaseEndpoint} from "../BaseUrl";
import axios, {AxiosRequestConfig} from "axios";
import {ApplicationUserType} from "../../../types/models/ApplicationUserType";
import {Token} from "../../TokenManager";


const GetMeEndpoint = BaseEndpoint + "Account/me"

type responseType = ApplicationUserType

export class GetMeRequestManager {
    private _config: AxiosRequestConfig<responseType>;

    constructor(token: Token) {

        const config: AxiosRequestConfig = {
            method: "get",
            url: GetMeEndpoint,
            headers:{
                "Authorization":`${token.token_type} ${token.access_token}`
            }
        };
        this._config = config;
    }

    public execute = (): Promise<responseType> => {
        return axios<responseType>(this._config)
            .then(response => {return response.data as responseType})
            .catch();

    }
}
import {BaseEndpoint} from "../BaseUrl";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {ApplicationUserType} from "../../../types/models/ApplicationUserType";


const GetUserByIdEndpoint = BaseEndpoint + "Account/id"

type responseType = ApplicationUserType

type requestParams = {
    userId: string
}

export class GetUserByIdRequestManager {
    private _config: AxiosRequestConfig<responseType>;

    constructor(params: requestParams) {
        const config: AxiosRequestConfig = {
            method: "get",
            url: GetUserByIdEndpoint,
            params: {
                "userId": params.userId
            }
        };
        this._config = config;
    }

    public getResponse = (): Promise<AxiosResponse<responseType>> => {
        return axios<responseType>(this._config);

    }
}
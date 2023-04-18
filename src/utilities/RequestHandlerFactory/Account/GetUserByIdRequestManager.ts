import {BaseEndpoint} from "../BaseUrl";
import axios, {AxiosRequestConfig} from "axios";
import {ErrorHandler} from "../../ErrorHandlerFactory/ErrorHandler";
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

    public execute = (): Promise<responseType | void> => {
        let deals: responseType;
        let errorHandler = ErrorHandler.getInstance();

        return axios<responseType>(this._config)
            .then(response => deals = response.data)
            .catch(error => errorHandler.handle(error))

    }
}
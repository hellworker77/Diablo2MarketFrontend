import {BaseEndpoint} from "../BaseUrl";
import axios, {AxiosRequestConfig} from "axios";
import {ErrorHandler} from "../../ErrorHandlerFactory/ErrorHandler";
import {DealType} from "../../../types/models/DealType";


const GetItemByIdEndpoint = BaseEndpoint + "Deal/last24HoursDeals"

type responseType = Array<DealType>
type requestParams = {
    index: number,
    size: number
}

export class GetLast24HoursDealsRequestManager {
    private _config: AxiosRequestConfig<responseType>;

    constructor(params: requestParams) {
        const config: AxiosRequestConfig = {
            method: "get",
            url: GetItemByIdEndpoint,
            params: {
                "index": params.index,
                "size": params.size
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
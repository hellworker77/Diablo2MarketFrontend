import {BaseEndpoint} from "../BaseUrl";
import axios, {AxiosRequestConfig} from "axios";
import {DealType} from "../../../types/models/DealType";


const GetLast24HoursDealsEndpoint = BaseEndpoint + "Deal/last24HoursDeals"

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
            url: GetLast24HoursDealsEndpoint,
            params: {
                "index": params.index,
                "size": params.size
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
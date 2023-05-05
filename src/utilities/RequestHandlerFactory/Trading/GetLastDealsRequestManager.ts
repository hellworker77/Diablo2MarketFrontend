import {BaseEndpoint} from "../BaseUrl";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {DealType} from "../../../types/models/DealType";


const GetLast24HoursDealsEndpoint = BaseEndpoint + "Deal/chunk"

type responseType = Array<DealType>
type requestParams = {
    index: number,
    size: number
}

export class GetLastDealsRequestManager {
    private readonly _config: AxiosRequestConfig<responseType>;

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

    public getResponse = (): Promise<AxiosResponse<responseType>> => {
        return axios<responseType>(this._config)

    }
}
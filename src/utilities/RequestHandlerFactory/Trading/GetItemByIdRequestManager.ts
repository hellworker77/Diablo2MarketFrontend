import {BaseEndpoint} from "../BaseUrl";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {ItemType} from "../../../types/models/ItemType";


const GetItemByIdEndpoint = BaseEndpoint + "Item/id"

type responseType = ItemType;
type requestParams = {
    itemId: string
}


export class GetItemByIdRequestManager {
    private readonly _config: AxiosRequestConfig<responseType>;

    constructor(params: requestParams) {
        const config: AxiosRequestConfig = {
            method: "get",
            url: GetItemByIdEndpoint,
            params: {
                'itemId': params.itemId
            }
        };
        this._config = config;
    }

    public getResponse = (): Promise<AxiosResponse<responseType>> => {
        return axios<responseType>(this._config)
    }
}

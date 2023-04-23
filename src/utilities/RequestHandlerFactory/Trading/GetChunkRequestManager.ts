import {BaseEndpoint} from "../BaseUrl";
import axios, {AxiosRequestConfig} from "axios";
import {ItemType} from "../../../types/models/ItemType";


const GetChunkEndpoint = BaseEndpoint + "Item/chunk"

type responseType = Array<ItemType>;
type requestParams = {
    index: number,
    size: number
}

export class GetChunkRequestManager{
    private _config: AxiosRequestConfig<responseType>;

    constructor(params: requestParams) {
        const config: AxiosRequestConfig = {
            method: "get",
            url: GetChunkEndpoint,
            params: {
                'index': params.index,
                'size': params.size
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
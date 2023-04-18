import {BaseEndpoint} from "../BaseUrl";
import axios, {AxiosRequestConfig} from "axios";
import {ItemType} from "../../../types/models/ItemType";
import {ErrorHandler} from "../../ErrorHandlerFactory/ErrorHandler";

const GetChunkEndpoint = BaseEndpoint + "Item/chunk"

export class GetChunkRequestManager{
    private _config: AxiosRequestConfig<Array<ItemType>>;

    constructor(index: number, size: number) {
        const config: AxiosRequestConfig = {
            method: "get",
            url: GetChunkEndpoint,
            params: {
                'index': index,
                'size': size
            }
        };
        this._config = config;
    }

    public execute = (): Promise<Array<ItemType> | void> => {
        let items: Array<ItemType>;
        let errorHandler = ErrorHandler.getInstance();

        return axios<Array<ItemType>>(this._config)
            .then(response => items = response.data)
            .catch(error => errorHandler.handle(error))

    }
}
import {BaseEndpoint} from "../BaseUrl";
import axios, {AxiosRequestConfig} from "axios";
import {ItemType} from "../../../types/models/ItemType";
import {ErrorHandler} from "../../ErrorHandlerFactory/ErrorHandler";


const GetItemByIdEndpoint = BaseEndpoint + "Item/id"

export class GetItemByIdRequestManager {
    private _config: AxiosRequestConfig<ItemType>;

    constructor(itemId: string) {
        const config: AxiosRequestConfig = {
            method: "get",
            url: GetItemByIdEndpoint,
            params: {
                'itemId': itemId
            }
        };
        this._config = config;
    }

    public execute = (): Promise<ItemType | void> => {
        let item: ItemType;
        let errorHandler = ErrorHandler.getInstance();

        return axios<ItemType>(this._config)
            .then(response => item = response.data)
            .catch(error => errorHandler.handle(error))

    }
}

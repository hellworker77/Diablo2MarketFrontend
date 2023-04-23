import {AbstractHttpHandler} from "./AbstractHttpHandler";
import {AxiosError} from "axios";

export class BaseHttpHandler extends AbstractHttpHandler{
    public isHttpHandlerFor = (type: AxiosError, sourceName: string): boolean => {
        return true;
    }

    public  static getInstance = () : AbstractHttpHandler => {
        if(this._instance === undefined){
            this._instance = new BaseHttpHandler();
        }
        return this._instance
    }
}
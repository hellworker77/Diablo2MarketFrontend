import {AbstractHttpHandler} from "./AbstractHttpHandler";
import {AxiosError} from "axios";

export class BaseHttpHandler extends AbstractHttpHandler{
    public handle = (error: AxiosError): void => {
        console.log(error.code)
    }

    public isHttpHandlerFor = (type: AxiosError): boolean => {
        return true;
    }

    public  static getInstance = () : AbstractHttpHandler => {
        if(this._instance === undefined){
            this._instance = new BaseHttpHandler();
        }
        return this._instance
    }
}
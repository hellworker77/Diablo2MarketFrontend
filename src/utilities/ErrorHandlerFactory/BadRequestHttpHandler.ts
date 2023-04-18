import {AbstractHttpHandler} from "./AbstractHttpHandler";
import {AxiosError} from "axios";

export class BadRequestHttpHandler extends AbstractHttpHandler{
    protected fittedType = "ERR_BAD_REQUEST"
    public handle = (error: AxiosError): void => {
        console.log("404")
    }

    public isHttpHandlerFor = (type: AxiosError): boolean => {
        return type.code === this.fittedType;
    }

    public  static getInstance = () : AbstractHttpHandler => {
        if(this._instance === undefined){
            this._instance = new BadRequestHttpHandler();
        }
        return this._instance
    }
}
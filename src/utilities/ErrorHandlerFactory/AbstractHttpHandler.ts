import {AxiosError} from "axios";

export class AbstractHttpHandler{
    protected fittedType: string = "Any"
    protected static _instance : AbstractHttpHandler;
    public isHttpHandlerFor = (type: AxiosError) : boolean => {
        return false
    }
    public handle = (error: AxiosError) : void =>{

    }
    public  static getInstance = () : AbstractHttpHandler => {
        if(this._instance === undefined){
            this._instance = new AbstractHttpHandler();
        }
        return this._instance
    }
}
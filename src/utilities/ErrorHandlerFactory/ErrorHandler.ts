import {BaseHttpHandler} from "./BaseHttpHandler";
import {AbstractHttpHandler} from "./AbstractHttpHandler";
import {BadRequestHttpHandler} from "./BadRequestHttpHandler";

export class ErrorHandler{
    private readonly _handlers: Array<AbstractHttpHandler>
    private static _instance: ErrorHandler;
    constructor() {
        this._handlers = [
            BadRequestHttpHandler.getInstance(),
            BaseHttpHandler.getInstance()
        ];
    }
    private _getHttpHandler = (error: any): AbstractHttpHandler => {
        return this._handlers.find(x=>x.isHttpHandlerFor(error))!
    }
    public handle = (error: any) : void => {
        let httpHandler = this._getHttpHandler(error)

        httpHandler.handle(error);
    }
    public static getInstance = () : ErrorHandler => {
        if(this._instance === undefined){
            this._instance = new ErrorHandler();
        }
        return this._instance;
    }
}


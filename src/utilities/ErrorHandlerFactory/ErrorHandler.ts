import {BaseHttpHandler} from "./BaseHttpHandler";
import {AbstractHttpHandler} from "./AbstractHttpHandler";
import {BadRequestHttpHandler} from "./BadRequestHttpHandler";
import {AxiosError} from "axios";
import {WrongSignInDataHttpHandler} from "./WrongSignInDataHttpHandler";
import {NotificationProps} from "../../components/Notification/Notification";

export class ErrorHandler{
    private readonly _handlers: Array<AbstractHttpHandler>
    private static _instance: ErrorHandler;
    constructor() {
        this._handlers = [
            WrongSignInDataHttpHandler.getInstance(),
            BadRequestHttpHandler.getInstance(),
            BaseHttpHandler.getInstance()
        ];
    }
    private _getHttpHandler = (error: AxiosError, sourceName: string): AbstractHttpHandler => {
        return this._handlers.find(x=>x.isHttpHandlerFor(error, sourceName))!
    }
    public execute = (error: AxiosError, sourceName: string) : NotificationProps => {
        let httpHandler = this._getHttpHandler(error, sourceName)

        return  httpHandler.handle(error);
    }
    public static getInstance = () : ErrorHandler => {
        if(this._instance === undefined){
            this._instance = new ErrorHandler();
        }
        return this._instance;
    }
}


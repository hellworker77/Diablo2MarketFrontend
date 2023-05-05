import {AxiosError} from "axios";
import {NotifyPropsOwn, NotifyStatus} from "../../types/props/NotificationProps";
import {v4} from "uuid";

export class AbstractHttpHandler {
    protected fittedSource: string = "Any"
    protected fittedHttpCode: number = -1
    protected static _instance: AbstractHttpHandler;
    public isHttpHandlerFor = (type: AxiosError, sourceName: string): boolean => {
        return false
    }
    public handle = (error: AxiosError): NotifyPropsOwn => {
        return {status: NotifyStatus.Error, message: "Connection not established", id: v4()}
    }
    public static getInstance = (): AbstractHttpHandler => {
        if (this._instance === undefined) {
            this._instance = new AbstractHttpHandler();
        }
        return this._instance
    }
}
import {AbstractHttpHandler} from "./AbstractHttpHandler";
import {AxiosError} from "axios";
import {NotifyPropsOwn, NotifyStatus} from "../../types/props/NotificationProps";
import {v4} from "uuid";

export class BadRequestHttpHandler extends AbstractHttpHandler {
    protected override fittedHttpCode = 400
    public handle = (error: AxiosError): NotifyPropsOwn => {
        return {status: NotifyStatus.Warning, message: error.message, id: v4()}
    }

    public isHttpHandlerFor = (type: AxiosError): boolean => {
        return type.response?.request.status === this.fittedHttpCode;
    }

    public static getInstance = (): AbstractHttpHandler => {
        if (this._instance === undefined) {
            this._instance = new BadRequestHttpHandler();
        }
        return this._instance
    }
}
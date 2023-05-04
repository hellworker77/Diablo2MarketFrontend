import {AbstractHttpHandler} from "./AbstractHttpHandler";
import {AxiosError} from "axios";
import {NotificationProps, NotificationStatus} from "../../components/Notification/CustomNotification";

export class BadRequestHttpHandler extends AbstractHttpHandler{
    protected override fittedHttpCode = 400
    public handle = (error: AxiosError): NotificationProps => {
        return {status: NotificationStatus.Warning, message: error.message, isVisible: true}
    }

    public isHttpHandlerFor = (type: AxiosError): boolean => {
        return type.response?.request.status === this.fittedHttpCode;
    }

    public  static getInstance = () : AbstractHttpHandler => {
        if(this._instance === undefined){
            this._instance = new BadRequestHttpHandler();
        }
        return this._instance
    }
}
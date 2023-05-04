import {AxiosError} from "axios";
import {NotificationProps, NotificationStatus} from "../../components/Notification/CustomNotification";

export class AbstractHttpHandler{
    protected fittedSource: string = "Any"
    protected fittedHttpCode: number = -1
    protected static _instance : AbstractHttpHandler;
    public isHttpHandlerFor = (type: AxiosError, sourceName: string) : boolean => {
        return false
    }
    public handle = (error: AxiosError) : NotificationProps =>{
        return {status: NotificationStatus.None, isVisible: false, message: ""}
    }
    public  static getInstance = () : AbstractHttpHandler => {
        if(this._instance === undefined){
            this._instance = new AbstractHttpHandler();
        }
        return this._instance
    }
}
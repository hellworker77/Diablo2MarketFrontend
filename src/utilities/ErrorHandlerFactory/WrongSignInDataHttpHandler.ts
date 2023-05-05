import {AbstractHttpHandler} from "./AbstractHttpHandler";
import {AxiosError} from "axios";
import SignIn from "../../components/SignIn/SignIn";
import {NotifyProps} from "../../types/props/NotificationProps";

export class WrongSignInDataHttpHandler extends AbstractHttpHandler{
    protected override fittedSource = SignIn.name;
    protected override fittedHttpCode = 400
    public isHttpHandlerFor = (error: AxiosError, sourceName: string): boolean => {
        return this.fittedSource === sourceName &&
            error.response?.request.status === this.fittedHttpCode;
    }

    public handle = (error: AxiosError) : NotifyProps=>{
        // @ts-ignore
        return {status: NotificationStatus.Warning, isVisible: true, message: error.response.data.error_description}
    }

    public  static getInstance = () : AbstractHttpHandler => {
        if(this._instance === undefined){
            this._instance = new WrongSignInDataHttpHandler();
        }
        return this._instance
    }
}
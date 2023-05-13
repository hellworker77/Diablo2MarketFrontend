import {AxiosError} from "axios";
import {NotifyPropsOwn} from "../../../types/props/NotificationProps";


export abstract class AbstractHttpResponseHandler{
    public isHandlerFor(source: string,
                        code: number): boolean{
        return this.fittedSources.find(x=>x === source) !== undefined
            && code == this.fittedHttpCode
    }
    public abstract handle(error: AxiosError,
                           callback: (notify: NotifyPropsOwn) => void) : void


    protected abstract fittedSources: Array<string>
    protected abstract fittedHttpCode: number
}
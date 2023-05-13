import {AbstractHttpResponseHandler} from "../Abstract/AbstractHttpResponseHandler";
import {AxiosError} from "axios";
import {NotifyPropsOwn, NotifyStatus} from "../../../types/props/NotificationProps";
import {v4} from "uuid";

export class NotFoundHttpResponseHandler extends AbstractHttpResponseHandler{
    isHandlerFor(source: string, code: number): boolean {
        return code === this.fittedHttpCode && this.exceptedSources.find(x=>x === source) === undefined
    }
    handle(error: AxiosError,
           callback: (notify: NotifyPropsOwn) => void): void {
        callback({status: NotifyStatus.Error, message: error.message, id: v4()})
    }
    protected exceptedSources = ["Profile"]
    protected fittedHttpCode = 404;
    protected fittedSources = []
}
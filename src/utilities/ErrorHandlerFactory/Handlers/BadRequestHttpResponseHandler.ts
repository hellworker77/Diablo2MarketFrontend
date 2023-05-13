import {AbstractHttpResponseHandler} from "../Abstract/AbstractHttpResponseHandler";
import {AxiosError} from "axios";
import {NotifyPropsOwn, NotifyStatus} from "../../../types/props/NotificationProps";
import {v4} from "uuid";

export class BadRequestHttpResponseHandler extends AbstractHttpResponseHandler{
    isHandlerFor(source: string, code: number): boolean {
        return code === this.fittedHttpCode
    }

    handle(error: AxiosError,
           callback: (notify: NotifyPropsOwn) => void): void {
        callback({status: NotifyStatus.Warning, message: error.message, id: v4()})
    }

    protected fittedHttpCode = 400;
    protected fittedSources = []
}
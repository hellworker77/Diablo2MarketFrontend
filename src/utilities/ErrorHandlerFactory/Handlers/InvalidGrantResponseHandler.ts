import {AbstractHttpResponseHandler} from "../Abstract/AbstractHttpResponseHandler";
import {NotifyPropsOwn, NotifyStatus} from "../../../types/props/NotificationProps";
import {v4} from "uuid";
import {AxiosError} from "axios";

export class InvalidGrantResponseHandler extends AbstractHttpResponseHandler{
    protected fittedHttpCode = 400;
    protected fittedSources = ["SignIn"];

    handle(error: AxiosError,
           callback: (notify: NotifyPropsOwn) => void): void {
        callback({status: NotifyStatus.Warning, message: "Wrong login or password", id:v4()})
    }

}
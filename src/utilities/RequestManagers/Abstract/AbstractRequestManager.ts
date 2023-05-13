import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {NotifyPropsOwn} from "../../../types/props/NotificationProps";
import {IRequestManager} from "../Interfaces/IRequestManager";
import {Container} from "../../ErrorHandlerFactory/Caintainers/Container";
import {IContainer} from "../../ErrorHandlerFactory/Interfaces/IContainer";

export abstract class AbstractRequestManager<T, Params> implements IRequestManager<T, Params> {
    constructor(notificationCallback: (notification: NotifyPropsOwn) => void,
                source: string) {
        this.notificationCallback = notificationCallback
        this.source = source
    }

    abstract buildConfig(params: Params): void

    queryCallback(callback: (data: T) => void,
                  container: IContainer = new Container()): Promise<boolean> {

        return new Promise( (resolve) => {
            this.fetch(container).then(data => {
                    if (data !== undefined) {
                        this.loadData(data, callback);
                    }
                    resolve(data !== undefined)
                }
            )
        })
    }

    queryData(container: IContainer = new Container()): Promise<T | void> {
        return new Promise( (resolve) => {
            this.fetch(container).then(data => {
                    resolve(data)
                }
            )
        })
    }

    protected async fetch(container: IContainer): Promise<T | void> {
        let response = this.getResponse()

        let responseData: T | void;

        if (response !== undefined) {
            responseData = await response
                .then(x => x.data)
                .catch(error => {
                    let code = error.response?.request.status

                    let handler = container.getResponseHandler(this.source, code)

                    handler?.handle(error, this.notificationCallback)
                })
        }

        return responseData
    }

    protected loadData(data: T, callback: (data: T) => void) {
        callback(data)
    }

    protected getResponse(): Promise<AxiosResponse<T>> | void {
        if (this.config !== undefined) {
            return axios<T>(this.config)
        }
    }

    protected readonly notificationCallback: (notification: NotifyPropsOwn) => void
    protected config: AxiosRequestConfig | undefined
    protected readonly abstract url: string
    protected abstract method: string
    protected readonly source: string
}



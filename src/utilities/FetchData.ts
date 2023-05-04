import {AxiosResponse} from "axios";
import {NotificationProps} from "../components/Notification/CustomNotification";
import {ErrorHandler} from "./ErrorHandlerFactory/ErrorHandler";

export async function fetchData<T>(response: Promise<AxiosResponse<T>>,
                                   callback: (data: NotificationProps) => void,
                                   source: string) {
    let task = response
        .then(response => {
            return response.data
        })
        .catch(error => callback(ErrorHandler.getInstance().execute(error, source)));

    let data = await task;

    return data;
}

export function loadFetchedData<T>(promise: Promise<void | T>
    , callback: (data: T) => void): void {
    promise.then(data => {
        if(data !== undefined){
            callback(data)
        }
    })
}
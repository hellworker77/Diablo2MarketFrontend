import {IContainer} from "../../ErrorHandlerFactory/Interfaces/IContainer";

export interface IRequestManager<T, Params> {
    buildConfig(params: Params) : void
    // fetch(callback: (data: T) => void,
    //       container: IContainer): Promise<void>
    queryCallback(callback: (data: T) => void,
                  container: IContainer): Promise<boolean>
    queryData(container: IContainer): Promise<T | void>
}
import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";

export interface IPageableRequestManager<T> {
    configureFrom<Params>(requestManager: AbstractRequestManager<number, Params>,
                          params: Params): void

    getPageCount(): number

    pageNext(callback: (data: T) => void) : void

    pageBack(callback: (data: T) => void) : void

    begin(callback: (data: T) => void) : void

    loadPage(index: number, callback: (data: T) => void) : void

    end(callback: (data: T) => void): void

    undo(callback: (data: T) => void): void

    redo(callback: (data: T) => void): void
}
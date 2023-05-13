import {AbstractRequestManager} from "./AbstractRequestManager";
import {IPageableRequestManager} from "../Interfaces/IPageableRequestManager";
import {IPage} from "../Interfaces/IPage";
import {NotifyPropsOwn} from "../../../types/props/NotificationProps";
import {IndexCaretaker} from "./IndexKeeper/IndexCaretaker";
import {Memento} from "./IndexKeeper/Memento";


export abstract class AbstractPageableRequestManager<T, Params extends IPage>
    extends AbstractRequestManager<Array<T>, Params>
    implements IPageableRequestManager<Array<T>> {

    constructor(notificationCallback: (notification: NotifyPropsOwn) => void,
                source: string,
                paramsTemplate: Params) {
        super(notificationCallback, source);
        this.pageSize = paramsTemplate.size;
        this.index = 0
        this.pageCount = 0
        this.indexCaretaker = new IndexCaretaker()
        this.onLoadedPageCount = () => {}
        this.onIndexChanged = () => {}
    }

    getPageCount(): number {
        return this.pageCount;
    }

    buildConfig(params: IPage): void {
        this.config = {
            method: this.method,
            url: this.url,
            params: params.toParams(),
            headers: params.toHeader()
        }
    }

    protected rebuildConfig(index: number, save: boolean) {
        if (this.isExistedPage(index)) {
            this.index = index

        } else {
            try{
                let prev = this.indexCaretaker.undo()
                this.index = prev.index
            }catch (error){
                this.index = 0
            }

        }
        this.onIndexChanged(this.index + 1)

        if(save){
            this.indexCaretaker.save(new Memento(this.index))
        }

        this.buildConfig(this.generateParams())
    }

    protected abstract generateParams(): Params

    configureFrom(requestManager: AbstractRequestManager<number, any>): void {
        requestManager.buildConfig(null)
        requestManager.queryData().then(count => {
            if (count != undefined) {
                this.pageCount = Math.ceil(count / this.pageSize)
                this.onLoadedPageCount(this.pageCount)
            }
        })
    }

    begin(callback: (data: Array<T>) => void): void {
        this.rebuildConfig(0, true)
        this.queryCallback(callback).then()
    }

    loadPage(index: number, callback: (data: Array<T>) => void): void {
        this.rebuildConfig(index, true)
        this.queryCallback(callback).then()
    }

    pageBack(callback: (data: Array<T>) => void): void {
        this.rebuildConfig(this.index - 1, true)
        this.queryCallback(callback).then()
    }

    pageNext(callback: (data: Array<T>) => void): void {
        this.rebuildConfig(this.index + 1, true)
        this.queryCallback(callback).then()
    }

    end(callback: (data: Array<T>) => void): void {
        this.rebuildConfig(this.pageCount - 1, true)
        this.queryCallback(callback).then()
    }

    redo(callback: (data: Array<T>) => void): void {
        let memento = this.indexCaretaker.redo()
        if(memento !== undefined){
            this.rebuildConfig(memento.index, false)
            this.queryCallback(callback).then()
        }
    }

    undo(callback: (data: Array<T>) => void): void {
        let memento = this.indexCaretaker.undo()
        if(memento !== undefined){
            this.rebuildConfig(memento.index,false)
            this.queryCallback(callback).then()
        }
    }
    protected isExistedPage(index: number): boolean {
        return index >= 0 && index < this.pageCount
    }

    public onLoadedPageCount: (count: number) => void
    public onIndexChanged: (index: number) => void
    protected indexCaretaker: IndexCaretaker
    protected index: number
    protected pageCount: number
    protected readonly pageSize: number



}
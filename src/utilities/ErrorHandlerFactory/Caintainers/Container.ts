import {AbstractHttpResponseHandler} from "../Abstract/AbstractHttpResponseHandler";
import {IContainer} from "../Interfaces/IContainer";
import {InvalidGrantResponseHandler} from "../Handlers/InvalidGrantResponseHandler";
import {NotFoundHttpResponseHandler} from "../Handlers/NotFoundHttpResponseHandler";

export class Container implements IContainer {
    constructor() {
        this._handlers = [
            new InvalidGrantResponseHandler(),
            new NotFoundHttpResponseHandler()
        ]
    }

    getResponseHandler(source: string, code: number): AbstractHttpResponseHandler | undefined {
        return this._handlers.find(x => x.isHandlerFor(source, code))
    }

    private readonly _handlers: Array<AbstractHttpResponseHandler>
}
import { AbstractHttpResponseHandler } from "../Abstract/AbstractHttpResponseHandler";

export interface IContainer{
    getResponseHandler(source: string, code: number) : AbstractHttpResponseHandler | undefined
}
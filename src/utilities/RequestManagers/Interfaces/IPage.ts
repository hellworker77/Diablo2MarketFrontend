import {Token} from "../../TokenManager";

export interface IPage{
    size: number
    index: number,
    token: Token | undefined
    toParams: () => {}
    toHeader: () => {}
}
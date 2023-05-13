import {IPage} from "../Interfaces/IPage";
import {Token} from "../../TokenManager";

export class Page implements IPage{
    readonly index: number;
    readonly size: number;
    readonly token: Token | undefined;

    constructor(index: number,
                size: number,
                token: Token | undefined) {
        this.index = index
        this.size = size
        this.token = token
    }

    toParams(): {} {
        return {
            "index": this.index,
            "size": this.size
        }
    }

    toHeader(): {} {
        return  {
            "Authorization": `${this.token?.token_type} ${this.token?.access_token}`
        }
    }


}
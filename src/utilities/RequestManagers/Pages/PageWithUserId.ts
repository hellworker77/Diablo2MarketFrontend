import {Page} from "./Page";
import {Token} from "../../TokenManager";

export class PageWithUserId extends Page{

    constructor(index: number, size: number,token: Token | undefined, userId: string){
        super(index, size, token)
        this.userId = userId
    }

    toParams(): {} {
        return {
            "index": this.index,
            "size": this.size,
            "userId": this.userId
        }
    }



    readonly userId: string
}
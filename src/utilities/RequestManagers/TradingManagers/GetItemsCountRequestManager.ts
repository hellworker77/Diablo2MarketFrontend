import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";
import {BaseEndpoint} from "../BaseEndpoint";

export class GetItemsCountRequestManager extends AbstractRequestManager<number, null>{
    buildConfig(params: null = null): void {
        this.config = {
            method: this.method,
            url: this.url
        }
    }
    protected method = "get";
    protected readonly url = BaseEndpoint + "Item/itemsCount";
}
import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";
import {ItemType} from "../../../types/models/ItemType";
import {BaseEndpoint} from "../BaseEndpoint";

type Params = {
    itemId: string
}

export class GetItemByIdRequestManager extends AbstractRequestManager<ItemType, Params> {
    buildConfig(params: Params): void {
        this.config = {
            method: this.method,
            url: this.url,
            params: {
                'itemId': params.itemId
            }
        }
    }
    protected method = "get";
    protected readonly url = BaseEndpoint + "Item/id";
}
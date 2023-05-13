import {ItemType} from "../../../types/models/ItemType";
import {BaseEndpoint} from "../BaseEndpoint";
import {AbstractPageableRequestManager} from "../Abstract/AbstractPageableRequestManager";
import {Page} from "../Pages/Page";

export class GetItemChunkRequestManager extends AbstractPageableRequestManager<ItemType, Page> {
    protected method = "get"
    protected readonly url = BaseEndpoint + "Item/chunk"

    protected generateParams(): Page {
        return new Page(this.index, this.pageSize, undefined)
    }
}
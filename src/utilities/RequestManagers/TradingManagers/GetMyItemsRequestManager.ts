import {AbstractPageableRequestManager} from "../Abstract/AbstractPageableRequestManager";
import {ItemType} from "../../../types/models/ItemType";
import {NotifyPropsOwn} from "../../../types/props/NotificationProps";
import {Page} from "../Pages/Page";
import {Token} from "../../TokenManager";
import {BaseEndpoint} from "../BaseEndpoint";

export class GetMyItemsRequestManager extends AbstractPageableRequestManager<ItemType, Page>{
    constructor(notificationCallback: (notification: NotifyPropsOwn) => void,
                source: string,
                paramsTemplate: Page) {
        super(notificationCallback, source, paramsTemplate)
        this.token = paramsTemplate.token
    }
    protected generateParams(): Page {
        return new Page(this.index, this.pageSize, this.token);
    }

    protected method = "get";
    protected token: Token | undefined
    protected readonly url = BaseEndpoint + "Item/ownChunk"
}
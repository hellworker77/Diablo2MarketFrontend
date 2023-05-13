import {AbstractPageableRequestManager} from "../Abstract/AbstractPageableRequestManager";
import {ItemType} from "../../../types/models/ItemType";
import {PageWithUserId} from "../Pages/PageWithUserId";
import {BaseEndpoint} from "../BaseEndpoint";
import {NotifyPropsOwn} from "../../../types/props/NotificationProps";

export class GetUserItemsRequestManager extends AbstractPageableRequestManager<ItemType, PageWithUserId>{
    constructor(notificationCallback: (notification: NotifyPropsOwn) => void,
                source: string,
                paramsTemplate: PageWithUserId) {
        super(notificationCallback, source, paramsTemplate)
        this.userId = paramsTemplate.userId
    }
    protected generateParams(): PageWithUserId {
        return new PageWithUserId(this.index, this.pageSize, undefined, this.userId)
    }

    protected readonly userId: string
    protected method = "get";
    protected readonly url = BaseEndpoint + "Item/userChunk";

}
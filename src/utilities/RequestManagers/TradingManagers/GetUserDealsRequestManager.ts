import {AbstractPageableRequestManager} from "../Abstract/AbstractPageableRequestManager";
import {DealType} from "../../../types/models/DealType";
import {PageWithUserId} from "../Pages/PageWithUserId";
import {NotifyPropsOwn} from "../../../types/props/NotificationProps";
import {BaseEndpoint} from "../BaseEndpoint";

export class GetUserDealsRequestManager extends AbstractPageableRequestManager<DealType, PageWithUserId> {
    constructor(notificationCallback: (notification: NotifyPropsOwn) => void,
                source: string,
                paramsTemplate: PageWithUserId) {
        super(notificationCallback, source, paramsTemplate)
        this.userId = paramsTemplate.userId
    }

    protected generateParams(): PageWithUserId {
        return new PageWithUserId(this.index,this.pageSize, undefined, this.userId)
    }

    protected readonly userId: string
    protected method = "get"
    protected readonly url = BaseEndpoint + "Deal/userChunk"

}
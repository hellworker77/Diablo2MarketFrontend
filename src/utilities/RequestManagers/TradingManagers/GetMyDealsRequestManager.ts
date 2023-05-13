import {AbstractPageableRequestManager} from "../Abstract/AbstractPageableRequestManager";
import {DealType} from "../../../types/models/DealType";
import {Page} from "../Pages/Page";
import {Token} from "../../TokenManager";
import {NotifyPropsOwn} from "../../../types/props/NotificationProps";
import {BaseEndpoint} from "../BaseEndpoint";

export class GetMyDealsRequestManager extends AbstractPageableRequestManager<DealType, Page> {
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
    protected readonly url = BaseEndpoint + "Deal/ownChunk"

}
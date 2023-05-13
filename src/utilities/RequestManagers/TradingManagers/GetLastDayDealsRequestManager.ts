import {AbstractPageableRequestManager} from "../Abstract/AbstractPageableRequestManager";
import {DealType} from "../../../types/models/DealType";
import {BaseEndpoint} from "../BaseEndpoint";
import {Page} from "../Pages/Page";

export class GetLastDayDealsRequestManager extends AbstractPageableRequestManager<DealType, Page>{
    protected method = "get";
    protected readonly url = BaseEndpoint + "Deal/last24HoursDeals";

    protected generateParams(): Page {
        return new Page(this.index, this.pageSize, undefined)
    }

}
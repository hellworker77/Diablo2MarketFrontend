import {AbstractPageableRequestManager} from "../Abstract/AbstractPageableRequestManager";
import {DealType} from "../../../types/models/DealType";
import {BaseEndpoint} from "../BaseEndpoint";
import {Page} from "../Pages/Page";

export class GetLastDealsRequestManager extends AbstractPageableRequestManager<DealType, Page> {
    protected generateParams(): Page {
        return new Page(this.index, this.pageSize, undefined)
    }

    protected method = BaseEndpoint + "Deal/chunk";
    protected readonly url = "get";

}
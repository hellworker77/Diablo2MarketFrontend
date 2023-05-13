import {AbstractRequestManager} from "../Abstract/AbstractRequestManager";
import {MediaType} from "../../../types/models/MediaType";
import {BaseEndpoint} from "../BaseEndpoint";

type Params = {
    mediaId : string
}


export class GetMediaByIdRequestManager extends AbstractRequestManager<MediaType, Params>{
    buildConfig(params: Params): void {
        this.config = {
            method: this.method,
            url: this.url,
            params: {
                'mediaId': params.mediaId
            }
        }
    }

    protected method = "get";
    protected readonly url = BaseEndpoint + "Media/id"

}
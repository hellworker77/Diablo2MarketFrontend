import {IMediaLoader} from "./Interfaces/IMediaLoader";
import {MediaShortType, MediaType} from "../../types/models/MediaType";
import {GetMediaByIdRequestManager} from "../RequestManagers/MediaManagers/GetMediaByIdRequestManager";
import {MediaTypeEnum} from "../../types/models/enums/MediaTypeEnum";

export class MediaLoader implements IMediaLoader {
    constructor(mediaShorts: Array<MediaShortType>,
                requestManager: GetMediaByIdRequestManager,
                addToReducerCallback: (media: MediaType) => void) {
        this._mediasShort = mediaShorts
        this._requestManager = requestManager
        this._addToReducerCallback = addToReducerCallback
    }

    query(): void {
       this._mediasShort.forEach(x => {
           this._requestManager.buildConfig({mediaId: x.id})
           this._requestManager.queryCallback(this._addToReducerCallback).then()
        })
    }

    public static loadedImageIsCorrect(media: MediaType | null): boolean{
        if(media === undefined){
            return false
        }
        if(media?.type !== MediaTypeEnum.Photo){
            return false
        }

        return media.data.length > 0
    }

    public static convertToImage(media: MediaType | null) : string {
        return `data:image/png;base64,${media?.data??""}`
    }

    private readonly _addToReducerCallback: (media: MediaType) => void
    private readonly _mediasShort: Array<MediaShortType>
    private readonly _requestManager: GetMediaByIdRequestManager
}
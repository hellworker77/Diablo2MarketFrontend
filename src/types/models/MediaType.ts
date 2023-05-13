import {MediaTypeEnum} from "./enums/MediaTypeEnum";

export type MediaType = MediaShortType & {
    data: Uint8Array
}

export type MediaShortType = {
    id: string,
    type: MediaTypeEnum,
}
import {MediaTypeEnum} from "./enums/MediaTypeEnum";

export type MediaType = {
    id: string,
    type: MediaTypeEnum,
    data: Array<Uint8Array>
}
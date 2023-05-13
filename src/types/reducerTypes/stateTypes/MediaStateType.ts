import {MediaType} from "../../models/MediaType";

export type MediaStateType = {
    selectedId: string,
    selected: MediaType | null
    medias: Array<MediaType>
}
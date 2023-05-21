import {MediaType} from "../../models/MediaType";

export type MediaStateType = {
    selectedId: string,
    selected: MediaType | null
    medias: Array<MediaType>,
    base64Image: string | null,
    itemPhotoToUpload: File | null
}
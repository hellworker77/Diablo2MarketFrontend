import {MediaType} from "../../../models/MediaType";

export const ADD_MEDIA_ACTION_TYPE = "ADD_MEDIA_ACTION_TYPE"

export type AddMediaActionType = {
    type: typeof ADD_MEDIA_ACTION_TYPE,
    media: MediaType
}
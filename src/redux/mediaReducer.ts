import {MediaStateType} from "../types/reducerTypes/stateTypes/MediaStateType";
import {GlobalMediaActionType} from "../types/reducerTypes/actionTypes/GlobalMediaActionType";
import {ADD_MEDIA_ACTION_TYPE, AddMediaActionType} from "../types/reducerTypes/actionTypes/Media/AddMediaActionType";
import {
    DISPOSE_MEDIAS_ACTION_TYPE,
    DisposeMediasActionType
} from "../types/reducerTypes/actionTypes/Media/DisposeMediasActionType";
import {
    SELECT_MEDIA_ACTION_TYPE,
    SelectMediaActionType
} from "../types/reducerTypes/actionTypes/Media/SelectMediaActionType";
import {MediaType} from "../types/models/MediaType";

let initialState: MediaStateType = {
    selectedId: "",
    selected: null,
    medias: []
}

const MediaReducer = (state = initialState, action: GlobalMediaActionType): MediaStateType => {
    switch (action.type) {
        case ADD_MEDIA_ACTION_TYPE:
            if(state.medias.find(x=>x.id === action.media.id) === undefined){
                state.medias.push(action.media)
                return {
                    ...state,
                    medias: [...state.medias],
                    selectedId: state.selectedId === "" ? action.media.id : state.selectedId,
                    selected: state.selected === null ? state.medias.find(x=>x.id === action.media.id) ?? state.selected : state.selected
                }
            }
            else{
                return {
                    ...state
                }
            }

        case DISPOSE_MEDIAS_ACTION_TYPE:
            return {
                ...state,
                medias: [],
                selectedId: "",
                selected: null
            }
        case SELECT_MEDIA_ACTION_TYPE:
            return {
                ...state,
                selectedId: action.mediaId,
                selected: state.medias.find(x=>x.id === action.mediaId) ?? state.selected
            }
        default:
            return {
                ...state
            }
    }
}

export const addMediaActionCreate = (media: MediaType): AddMediaActionType => ({
    type: ADD_MEDIA_ACTION_TYPE, media: media
})

export const disposeMediasActionCreate = (): DisposeMediasActionType => ({
    type: DISPOSE_MEDIAS_ACTION_TYPE
})

export const selectMediaActionCreate = (mediaId: string): SelectMediaActionType => ({
    type: SELECT_MEDIA_ACTION_TYPE, mediaId: mediaId
})

export default MediaReducer;
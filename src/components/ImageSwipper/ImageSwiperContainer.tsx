import {Dispatch} from "redux";
import {GlobalAccountActionType} from "../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {GlobalNotificationActionType} from "../../types/reducerTypes/actionTypes/GlobalNotificationActionType";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../redux/notificationReducer";
import {ImageSwiperPropsDispatch, ImageSwiperPropsState} from "../../types/props/ImageSwiper";
import {connect} from "react-redux";
import ImageSwiper from "./ImageSwiper";
import {addMediaActionCreate, disposeMediasActionCreate, selectMediaActionCreate} from "../../redux/mediaReducer";
import {MediaType} from "../../types/models/MediaType";
import {GlobalMediaActionType} from "../../types/reducerTypes/actionTypes/GlobalMediaActionType";
import {AppStateType} from "../../redux/store";

let mapStateToProps = (state: AppStateType) : ImageSwiperPropsState =>{
    return {
        medias: state.mediaReducer.medias,
        selected: state.mediaReducer.selected,
        selectedId: state.mediaReducer.selectedId
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalAccountActionType | GlobalNotificationActionType | GlobalMediaActionType>): ImageSwiperPropsDispatch => {
    return {
        addNotify: (notify: NotifyPropsOwn) => {
            dispatch(addNotifyActionCreate(notify))
        },
        disposeMedias: () => {
            dispatch(disposeMediasActionCreate())
        },
        addMedia: (media: MediaType) => {
            dispatch(addMediaActionCreate(media))
        },
        selectMedia: (mediaId: string) => {
            dispatch(selectMediaActionCreate(mediaId))
        }
    }
}

let ImageSwiperContainer = connect(mapStateToProps, mapDispatchToProps)(ImageSwiper);

export default ImageSwiperContainer;
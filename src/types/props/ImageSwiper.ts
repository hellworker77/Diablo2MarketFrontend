import {MediaShortType, MediaType} from "../models/MediaType";
import {NotifyPropsOwn} from "./NotificationProps";

export type ImageSwiperProps = ImageSwiperPropsOwn & ImageSwiperPropsDispatch & ImageSwiperPropsState

export type ImageSwiperPropsOwn = {
    imageShorts: Array<MediaShortType>
}

export type ImageSwiperPropsState = {
    medias: Array<MediaType>
    selected: MediaType | null
    selectedId: string
}

export type ImageSwiperPropsDispatch = {
    addNotify: (notify: NotifyPropsOwn) => void
    disposeMedias: () => void
    selectMedia:(mediaId: string) => void
    addMedia:(media: MediaType) => void
}
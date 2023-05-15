import userModule from "../../../styles/User/User.module.css"
import uiModule from "../../../styles/Ui.module.css"
import ImageSwiperContainer from "../../ImageSwipper/ImageSwiperContainer";
import React from "react";
import {MediaShortType} from "../../../types/models/MediaType";
export type PictureProps = {
    medias: Array<MediaShortType>
}

export const Picture = (props: PictureProps) => {
    return(
        <div className={`${userModule.image_container} ${uiModule.frame_brown}`}
             style={{width: "100%", aspectRatio: "1/1"}}>
            <ImageSwiperContainer imageShorts={props.medias ?? []}/>
        </div>
    )
}
import defaultAvatar from "../../images/defaultAvatar.png"
import imageSwiperModule from "../../styles/ImageSwiper.module.css"
import uiModule from "../../styles/Ui.module.css"
import {useEffect} from "react";
import {ImageSwiperProps} from "../../types/props/ImageSwiper";
import {MediaLoader} from "../../utilities/MediaLoader/MediaLoader";
import {GetMediaByIdRequestManager} from "../../utilities/RequestManagers/MediaManagers/GetMediaByIdRequestManager";
import {v4} from "uuid";

const ImageSwiper = (props: ImageSwiperProps) => {
    let requestManager = new GetMediaByIdRequestManager(props.addNotify, typeof ImageSwiper);

    useEffect(() => {
        const mediaLoader = new MediaLoader(props.imageShorts, requestManager, props.addMedia)
        mediaLoader.query()
    }, [props.imageShorts])

    useEffect(() => {
        return () => {
            props.disposeMedias()
        }
    }, [])
    const renderDefault = (): JSX.Element => {
        return (
            <div className={imageSwiperModule.container}>
                <img src={defaultAvatar} alt={typeof defaultAvatar}/>
            </div>
        )
    }
    const render = (): JSX.Element => {
        return (
            <div className={imageSwiperModule.container}>
                {
                    MediaLoader.loadedImageIsCorrect(props.selected) ?
                        <img src={MediaLoader.convertToImage(props.selected)} alt={typeof props.selected}/> :
                        <img src={defaultAvatar} alt={typeof defaultAvatar}/>
                }
                <div className={imageSwiperModule.buttons}>
                    {
                        props.medias.length > 1 ?
                            props.medias.map(x =>
                                <div key={v4()} className={imageSwiperModule.button}
                                     data-state={x.id === props.selectedId ? "active" : "disabled"}
                                     onClick={() => props.selectMedia(x.id)}>
                                </div>) : ""
                    }
                </div>
            </div>
        )
    }

    return (
        <div className={uiModule.frame_brown}>
            {props.imageShorts.length === 0 ? renderDefault() : render()}
        </div>
    )
}

export default ImageSwiper;
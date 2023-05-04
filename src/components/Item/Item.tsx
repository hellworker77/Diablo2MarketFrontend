import React, {useEffect, useState} from "react";
import {ItemProps} from "../../types/props/ItemProps";
import {GetItemByIdRequestManager} from "../../utilities/RequestHandlerFactory/Trading/GetItemByIdRequestManager";
import uiModule from '../../styles/Ui.module.css'
import {rarityToColorConverter} from "../../utilities/rarityToColorConverter";
import ItemAttributeContainer from "./ItemAttribute/ItemAttributeContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import CustomNotification, {NotificationProps} from "../Notification/CustomNotification";
import {fetchData, loadFetchedData} from "../../utilities/FetchData";
import {ItemType} from "../../types/models/ItemType";

const Item = (props: ItemProps) => {
    let navigate = useNavigate();

    useEffect(() => {
        let requestManager = new GetItemByIdRequestManager({itemId: props.itemId})
        let fetch = fetchData<ItemType>(requestManager.getResponse(), setNotification, typeof Item)
        loadFetchedData(fetch, props.loadItem)
    }, [props])

    const [notification, setNotification] = useState<NotificationProps>();

    return (
        <div>
            <FontAwesomeIcon icon={faArrowLeft}
                             style={{color: "white", cursor: "pointer", fontSize: "20px"}}
                             onClick={() => {
                                 navigate("/trade")
                             }}/>

            <div className={uiModule.frame_gray}>
                <div className={uiModule.preloader}
                     style={{width: "200px"}}>
                </div>
                <div style={{color: rarityToColorConverter(props.loadedItem?.rarity), margin: "5px auto"}}>
                    {props.loadedItem?.name}
                </div>
                {
                    props.loadedItem?.attributes.map(attribute =>
                        <ItemAttributeContainer key={attribute.id}
                                                itemAttribute={attribute}/>
                    )}
            </div>
            {
                notification ? <CustomNotification status={notification.status}
                                                   isVisible={notification.isVisible}
                                                   message={notification.message}/> : ""
            }
        </div>
    )
}


export default Item;
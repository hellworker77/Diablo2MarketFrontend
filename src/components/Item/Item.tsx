import React, {useEffect} from "react";
import {ItemProps} from "../../types/props/ItemProps";
import uiModule from '../../styles/Ui.module.css'
import {rarityToColorConverter} from "../../utilities/rarityToColorConverter";
import ItemAttributeContainer from "./ItemAttribute/ItemAttributeContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {GetItemByIdRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetItemByIdRequestManager";

const Item = (props: ItemProps) => {
    let navigate = useNavigate();

    useEffect(() => {
        let requestManager = new GetItemByIdRequestManager(props.addNotify, typeof Item)
        
        requestManager.buildConfig({itemId: props.itemId})

        requestManager.queryCallback(props.loadItem).then()
    }, [props])
    return (
        <div>
            <FontAwesomeIcon icon={faArrowLeft}
                             style={{color: "white", cursor: "pointer", fontSize: "20px"}}
                             onClick={() => {
                                 navigate(-1)
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
        </div>
    )
}


export default Item;
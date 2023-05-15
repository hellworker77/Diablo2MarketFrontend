import React, {useEffect, useMemo} from "react";
import {ItemProps} from "../../types/props/ItemProps";
import uiModule from '../../styles/Ui.module.css'
import {rarityToColorConverter} from "../../utilities/rarityToColorConverter";
import ItemAttributeContainer from "./ItemAttribute/ItemAttributeContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {GetItemByIdRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetItemByIdRequestManager";
import {ItemShowMode} from "../../types/models/enums/ItemShowMode";
import {CreateDealRequestManager} from "../../utilities/RequestManagers/TradingManagers/CreateDealRequestManager";


const Item = (props: ItemProps) => {
    let navigate = useNavigate();

    let createDealRequestManager = useMemo(() => {
        return new CreateDealRequestManager(props.addNotify, Item.name)
    }, [])

    useEffect(() => {
        let requestManager = new GetItemByIdRequestManager(props.addNotify, Item.name)

        requestManager.buildConfig({itemId: props.itemId})

        requestManager.queryCallback(props.loadItem).then()
    }, [props])

    const createDeal = () => {
        if (props.token !== null) {
            let params = {
                itemId: props.itemId,
                token: props.token
            }

            createDealRequestManager.buildConfig(params)
            createDealRequestManager.queryData().then()
        }
    }
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
                    )
                }
                {
                    props.mode === ItemShowMode.Order ?
                        <div className={uiModule.button}
                             style={{margin: "0 10px 10px auto"}}
                             onClick={() => createDeal()}>
                            <div className={uiModule.green}>
                                <div style={{margin: "auto auto auto 5px"}}>
                                    <FontAwesomeIcon icon={faCartShopping}/>
                                </div>
                                <div style={{margin: "auto 5px auto auto"}}>
                                    Order
                                </div>
                            </div>
                        </div> :
                        ""
                }
            </div>

        </div>
    )
}


export default Item;
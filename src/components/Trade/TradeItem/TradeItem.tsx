import React, {useEffect, useState} from "react";
import {TradeItemProps, TradeItemShowMode} from "../../../types/props/TradeItemProps";
import tradeItemModule from "../../../styles/Trade/TradeItem.module.css"
import uiModule from "../../../styles/Ui.module.css"
import {NavLink} from "react-router-dom";
import goldIcon from "../../../images/icons/golddrop.png"
import {ItemShowMode} from "../../../types/models/enums/ItemShowMode";
import {getExpiresTime} from "../../../utilities/getExpiresTime";
import {ApplicationUserType} from "../../../types/models/ApplicationUserType";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {GetUserByIdRequestManager} from "../../../utilities/RequestManagers/AccountManagers/GetUserByIdRequestManager";


const TradeItem = (props: TradeItemProps) => {
    const [user, setUser] = useState<ApplicationUserType>()
    const getContainerGridAutoFlow = () : string => {
        return props.mode == TradeItemShowMode.Detail? "row": "column"
    }

    const getUserNavigateDisplay = () : string => {
        return props.mode == TradeItemShowMode.Detail? "block": "none"
    }

    const loadUser = () => {
        let requestManager = new GetUserByIdRequestManager(props.addNotify, typeof TradeItem)

        requestManager.buildConfig({userId: props.item.ownerId})

        requestManager.queryCallback(setUser).then()
    }

    useEffect(()=>{
        if(props.mode == TradeItemShowMode.Detail){
            loadUser()
        }
    },[props])

    return (
        <div className={tradeItemModule.container}
            style={{gridAutoFlow:getContainerGridAutoFlow()}}>
            <div className={tradeItemModule.top_part}>
                <div className={uiModule.tinyBoxContainer}>
                    <div>{props.item.price}</div>
                    <img alt={"icon"} src={goldIcon}></img>
                </div>
                <NavLink to={`/itemShow`}
                         className={tradeItemModule.link}
                         style={{margin: "auto 0 auto 10px"}}
                         onClick={() => {
                             props.selectItemId(props.item.id)
                             props.changeItemShowMode(props.itemShowMode)
                         }}>
                    {props.item.name}
                </NavLink>
            </div>
            <div className={tradeItemModule.bottom_part}>
                <NavLink to={`/user`}
                         style={{display:getUserNavigateDisplay()}}
                         onClick={() => props.selectUserId(props.item.ownerId)}
                         className={tradeItemModule.link}>
                    {user?.userName ?? <FontAwesomeIcon icon={faSpinner} spin/>}
                </NavLink>
                <div className={uiModule.time}>
                    {getExpiresTime(props.item.postedDate)}
                </div>
            </div>
        </div>
    )
}


export default TradeItem;
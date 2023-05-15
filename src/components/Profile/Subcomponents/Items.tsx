import userModule from "../../../styles/User/User.module.css";
import uiModule from "../../../styles/Ui.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faScaleBalanced} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import TradeItemContainer from "../../Trade/TradeItem/TradeItemContainer";
import {TradeItemShowMode} from "../../../types/props/TradeItemProps";
import {ItemType} from "../../../types/models/ItemType";
import {
    AbstractPageableRequestManager
} from "../../../utilities/RequestManagers/Abstract/AbstractPageableRequestManager";
import {IPage} from "../../../utilities/RequestManagers/Interfaces/IPage";
import Paginator from "../../Paginator/Paginator";
import {ItemShowMode} from "../../../types/models/enums/ItemShowMode";

export type ItemsProps<manager extends AbstractPageableRequestManager<ItemType, IPage>> = {
    items: Array<ItemType> | null
    itemShowMode: ItemShowMode
    manager: manager
    loadData: (data: ItemType[]) => void
}

export const Items = <manager extends AbstractPageableRequestManager<ItemType, IPage>>(props: ItemsProps<manager>) => {

    useEffect(()=>{
        props.manager.begin(props.loadData)
    },[])

    return (
        <div className={`${userModule.frame_left} ${uiModule.frame_brown}`}>
            <div className={userModule.frame_content}>
                <div className={`${uiModule.header}`}
                     style={{borderBottom: "2px solid black ", paddingBottom: "5px"}}>
                    Trades
                    <FontAwesomeIcon icon={faScaleBalanced}
                                     style={{marginLeft: "10px"}}/>
                </div>
                <div className={uiModule.scrollBar} style={{overflowY: "auto"}}>
                    {props.items?.map(item =>
                        <TradeItemContainer mode={TradeItemShowMode.InUser}
                                            itemShowMode={props.itemShowMode}
                                            item={item}/>)}
                </div>
            </div>
            <div className={userModule.paginator}>
                <Paginator requestManager={props.manager} loadData={props.loadData}></Paginator>
            </div>
        </div>
    )
}
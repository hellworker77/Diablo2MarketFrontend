import userModule from "../../../styles/User/User.module.css";
import uiModule from "../../../styles/Ui.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import DealContainer from "../../Deal/DealContainer";
import React, {useEffect, useState} from "react";
import {DealType} from "../../../types/models/DealType";
import {AbstractRequestManager} from "../../../utilities/RequestManagers/Abstract/AbstractRequestManager";
import {
    AbstractPageableRequestManager
} from "../../../utilities/RequestManagers/Abstract/AbstractPageableRequestManager";
import {IPage} from "../../../utilities/RequestManagers/Interfaces/IPage";
import Paginator from "../../Paginator/Paginator";
import {DealShowMode} from "../../../types/props/DealProps";

export interface LastDealsProps<manager extends AbstractPageableRequestManager<DealType, IPage>> {
    deals: Array<DealType> | null
    manager: manager
    loadData: (data: DealType[]) => void
    mode: DealShowMode
}

export const LastDeals =
    <manager extends AbstractPageableRequestManager<DealType, IPage>>(props: LastDealsProps<manager>) => {

    useEffect(()=>{
        props.manager.begin(props.loadData)
    },[])

    return (
        <div className={`${userModule.frame_right} ${uiModule.frame_brown}`}>
            <div className={userModule.frame_content}>
                <div className={`${uiModule.header}`}
                     style={{borderBottom: "2px solid black ", paddingBottom: "5px"}}>
                    Last Deals
                    <FontAwesomeIcon icon={faCoins}
                                     style={{marginLeft: "10px"}}/>

                </div>
                <div style={{marginTop: "20px"}}>
                    {props.deals?.map(deal =>
                        <DealContainer key={deal.id}
                                       deal={deal}
                                       mode={props.mode}/>)}
                </div>
            </div>
            <div className={userModule.paginator}>
                <Paginator requestManager={props.manager} loadData={props.loadData}></Paginator>
            </div>
        </div>
    )
}
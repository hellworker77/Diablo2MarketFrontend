import React, {useEffect, useState} from "react"
import {RightSideBarProps} from "../../types/props/RightSideBarProps";
import uiModule from "../../styles/Ui.module.css"
import DealContainer from "../Deal/DealContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {
    GetLastDayDealsRequestManager
} from "../../utilities/RequestManagers/TradingManagers/GetLastDayDealsRequestManager";
import {Page} from "../../utilities/RequestManagers/Pages/Page";

const RightSideBar = (props: RightSideBarProps) => {
    const pageSize = 30

    const [requestManager, setRequestManager] =
        useState(new GetLastDayDealsRequestManager(props.addNotify,
            typeof RightSideBar,
            new Page(0, pageSize, undefined)))

    useEffect(() => {
        requestManager.begin(props.loadLast24Deals)
    }, [])


    return (
        <div className={uiModule.frame_brown}
             style={{margin: "20px", padding: "10px"}}>
            <div className={`${uiModule.header} ${uiModule.row_content_container}`}>
                <FontAwesomeIcon icon={faCoins}/>Last Deals
            </div>
            {props.last24Deals.map(deal =>
                <DealContainer key={deal.id} deal={deal}/>
            )}
        </div>
    )
}

export default RightSideBar;
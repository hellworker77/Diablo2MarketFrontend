import React, {useEffect, useState} from "react"
import {RightSideBarProps} from "../../types/props/RightSideBarProps";
import {
    GetLast24HoursDealsRequestManager
} from "../../utilities/RequestHandlerFactory/Trading/GetLast24HoursDealsRequestManager";
import uiModule from "../../styles/Ui.module.css"
import DealContainer from "../Deal/DealContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {fetchData, loadFetchedData} from "../../utilities/FetchData";
import {NotificationProps} from "../Notification/CustomNotification";

const RightSideBar = (props: RightSideBarProps) => {
    const [notification, setNotification] = useState<NotificationProps>();
    useEffect(()=>{
        let requestManager = new GetLast24HoursDealsRequestManager({index: 0, size: 50})

        let fetch = fetchData(requestManager.getResponse(), setNotification, typeof RightSideBar)

        loadFetchedData(fetch, props.loadLast24Deals)
    },[])


    return (
        <div className={uiModule.frame_brown}
             style={{margin: "20px", padding: "10px"}}>
            <div className={`${uiModule.header} ${uiModule.row_content_container}`}>
                <FontAwesomeIcon icon={faCoins} />Last Deals
            </div>
            {props.last24Deals.map(deal =>
                <DealContainer key={deal.id} deal={deal}/>
            )}
        </div>
    )
}

export default RightSideBar;
import {LastDealsProps} from "../../types/props/LastDealsProps";
import React, {useEffect} from "react";
import {fetchData, loadFetchedData} from "../../utilities/FetchData";
import {GetLastDealsRequestManager} from "../../utilities/RequestHandlerFactory/Trading/GetLastDealsRequestManager";
import uiModule from "../../styles/Ui.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import DealContainer from "../Deal/DealContainer";

const LastDeals = (props: LastDealsProps) => {
    useEffect(() => {
            let requestManager = new GetLastDealsRequestManager({index: 0, size: 1})

            let fetch = fetchData(requestManager.getResponse(), props.addNotify, typeof LastDeals)

            loadFetchedData(fetch, props.loadLastDeals)
        }
    )
    return (
        <div className={uiModule.frame_brown}
             style={{margin: "20px", padding: "10px"}}>
            <div className={`${uiModule.header} ${uiModule.row_content_container}`}>
                <FontAwesomeIcon icon={faCoins}/>Last Deals
            </div>
            {props.lastDeals.map(deal =>
                <DealContainer key={deal.id} deal={deal}/>
            )}
        </div>
    )
}

export default LastDeals;
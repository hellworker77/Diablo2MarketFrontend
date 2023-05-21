import {LastDealsProps} from "../../types/props/LastDealsProps";
import React, {useEffect, useMemo} from "react";
import uiModule from "../../styles/Ui.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import DealContainer from "../Deal/DealContainer";
import {GetLastDealsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetLastDealsRequestManager";
import {Page} from "../../utilities/RequestManagers/Pages/Page";
import {
    GetLastDealsCountRequestManager
} from "../../utilities/RequestManagers/TradingManagers/GetLastDealsCountRequestManager";
import {DealShowMode} from "../../types/props/DealProps";
import Paginator from "../Paginator/Paginator";

const LastDeals = (props: LastDealsProps) => {

    const pageSize = 3

    const requestManagerCount = useMemo(() => {
        return new GetLastDealsCountRequestManager(props.addNotify,
            LastDeals.name)
    }, [])


    const requestManager = useMemo(() => {
        return new GetLastDealsRequestManager(props.addNotify,
            LastDeals.name,
            new Page(0, pageSize, undefined)
        )
    }, [])

    useEffect(() => {
        requestManager.configureFrom(requestManagerCount, null)
    }, [])

    return (
        <div className={uiModule.frame_brown}
             style={{margin: "20px", padding: "10px"}}>
            <div className={`${uiModule.header} ${uiModule.row_content_container}`}>
                <FontAwesomeIcon icon={faCoins}/>Last Deals
            </div>
            {props.lastDeals.map(deal =>
                <DealContainer key={deal.id}
                               deal={deal}
                               mode={DealShowMode.Another}/>
            )}
            <Paginator requestManager={requestManager} loadData={props.loadLastDeals}/>
        </div>
    )
}

export default LastDeals;
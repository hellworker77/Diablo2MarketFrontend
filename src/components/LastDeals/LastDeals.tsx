import {LastDealsProps} from "../../types/props/LastDealsProps";
import React, {useEffect} from "react";
import uiModule from "../../styles/Ui.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import DealContainer from "../Deal/DealContainer";
import {GetLastDealsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetLastDealsRequestManager";
import {Page} from "../../utilities/RequestManagers/Pages/Page";
import {GetDealsCountRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetDealsCountRequestManager";
import {DealShowMode} from "../../types/props/DealProps";

const LastDeals = (props: LastDealsProps) => {

    const pageSize = 30


    let requestManagerCount: GetDealsCountRequestManager = new GetDealsCountRequestManager(props.addNotify,
        typeof LastDeals.name)

    let requestManager: GetLastDealsRequestManager = new GetLastDealsRequestManager(props.addNotify,
        typeof LastDeals,
        new Page(0, pageSize, undefined)
    )

    useEffect(() => {
            //requestManager.configureFrom(requestManagerCount)

            requestManager.begin(props.loadLastDeals)


        }, []
    )
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
        </div>
    )
}

export default LastDeals;
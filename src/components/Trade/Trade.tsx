import React, {useEffect, useMemo} from 'react';
import {TradeProps} from "../../types/props/TradeProps";
import TradeItemContainer from "./TradeItem/TradeItemContainer";
import tradeModule from "../../styles/Trade/Trade.module.css"
import uiModule from "../../styles/Ui.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faScaleBalanced} from '@fortawesome/free-solid-svg-icons';
import {TradeItemShowMode} from "../../types/props/TradeItemProps";
import {GetItemChunkRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetItemChunkRequestManager";
import {Page} from "../../utilities/RequestManagers/Pages/Page";

import buttonEnabledIcon from '../../images/icons/skillcalc.png'
import Paginator from "../Paginator/Paginator";
import {GetItemsCountRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetItemsCountRequestManager";
import {ItemShowMode} from "../../types/models/enums/ItemShowMode";
import {useNavigate} from "react-router-dom";

const Trade = (props: TradeProps) => {
    let navigate = useNavigate();
    const pageSize = 3
    const requestManagerCount = useMemo(() => {
        return new GetItemsCountRequestManager(props.addNotify,
            Trade.name)
    }, [])


    const requestManager = useMemo(() => {
        return new GetItemChunkRequestManager(props.addNotify,
            Trade.name,
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
                <FontAwesomeIcon icon={faScaleBalanced}/> Trades
            </div>
            <div className={tradeModule.addItemButton}
                 onClick={() => navigate("/addItem")}
                 style={{margin: "10px 0", display: `${props.token === null ? "none" : "flex"}`}}>
                <img alt={"image"}
                     style={{marginRight: "10px"}}
                     src={buttonEnabledIcon}/>
                <div className={uiModule.header}>
                    Add Item
                </div>
            </div>
            <div className={tradeModule.content}>
                {
                    props.items.map(x =>
                        <div key={x.id} className={tradeModule.item}><TradeItemContainer key={x.id}
                                                                                         itemShowMode={ItemShowMode.Order}
                                                                                         mode={TradeItemShowMode.Detail}
                                                                                         item={x}/></div>
                    )}
            </div>
            <Paginator requestManager={requestManager} loadData={props.loadItems}/>
        </div>
    )

}

export default Trade;
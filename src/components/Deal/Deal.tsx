import React from "react"
import {DealProps} from "../../types/props/DealProps";
import {getExpiresTime} from "../../utilities/getExpiresTime";
import uiModule from "../../styles/Ui.module.css"
import dealPanelModule from "../../styles/Deal/Deal.module.css"
import tradeItemModule from "../../styles/Trade/TradeItem.module.css";
import {ItemShowMode} from "../../types/models/enums/ItemShowMode";
import {NavLink} from "react-router-dom";

const Deal = (props: DealProps) => {
    return (
        <div className={`${dealPanelModule.container} ${uiModule.row_content_container}`}>
            <div className={uiModule.row_content_container}>
                <div className={uiModule.tinyBoxContainer}>
                    {props.deal.goods.price}
                </div>
                <div>
                    <NavLink to={`/ItemShow`}
                             className={tradeItemModule.link}
                             style={{margin: "auto 0 auto 10px"}}
                             onClick={() => {
                                 props.selectItemId(props.deal.goods.id)
                                 props.changeItemShowMode(ItemShowMode.View)
                             }}>
                        {props.deal.goods.name}
                    </NavLink>
                </div>
            </div>
            <div className={uiModule.time}>{getExpiresTime(props.deal.goods.postedDate)}</div>
        </div>
    )
}

export default Deal;
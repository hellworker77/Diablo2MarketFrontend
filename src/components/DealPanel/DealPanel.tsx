import React from "react"
import {DealPanelProps} from "../../types/props/DealPanelProps";
import {getExpiresTime} from "../../utilities/getExpiresTime";
import {rarityToColorConverter} from "../../utilities/rarityToColorConverter";
import uiModule from "../../styles/Ui.module.css"
import dealPanelModule from "../../styles/DealPanel/DealPanel.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import tradeItemModule from "../../styles/Trade/TradeItem.module.css";
import {ItemShowMode} from "../../types/models/enums/ItemShowMode";
import {NavLink} from "react-router-dom";

class DealPanel extends React.Component<DealPanelProps>{
    render() {
        return (
            <div className={`${dealPanelModule.container} ${uiModule.row_content_container}`}>
                <div className={uiModule.row_content_container}>
                    <div className={uiModule.tinyBoxContainer}>
                        {this.props.deal.goods.price}
                    </div>
                    <div>
                        <NavLink to={`/ItemShow`}
                                 className={tradeItemModule.link}
                                 style={{margin:"auto 0 auto 10px"}}
                                 onClick={()=>
                                 {
                                     this.props.selectItemId(this.props.deal.goods.id)
                                     this.props.changeItemShowMode(ItemShowMode.View)
                                 }}>
                            {this.props.deal.goods.name}
                        </NavLink>
                    </div>
                </div>
                <div className={uiModule.time}>{getExpiresTime(this.props.deal.goods.postedDate)}</div>
            </div>
        )
    }
}

export default DealPanel;
import React from "react";
import {TradeItemProps} from "../../../types/props/TradeItemProps";
import tradeItemModule from "../../../styles/Trade/TradeItem.module.css"
import uiModule from "../../../styles/Ui.module.css"
import {NavLink} from "react-router-dom";
import disabledIcon from "../../../images/icons/read.png"
import enabledIcon from "../../../images/icons/skillcalc.png"
import goldIcon from "../../../images/icons/golddrop.png"
import {ItemShowMode} from "../../../types/models/enums/ItemShowMode";
import {getExpiresTime} from "../../../utilities/getExpiresTime";



class TradeItem extends React.Component<TradeItemProps>{
    render() {
        return(
            <div className={tradeItemModule.container}>
                <div className={tradeItemModule.button}>
                    <img alt={"icon"}
                         src={this.props.isAuthorized?enabledIcon:disabledIcon}/>
                </div>
                <div className={tradeItemModule.top_part}>
                    <div className={tradeItemModule.price}>
                        <div className={uiModule.tinyBoxContainer}>
                            <div>{this.props.item.price}</div>
                            <img alt={"icon"} src={goldIcon}></img>
                        </div>
                    </div>
                    <NavLink to={`/ItemShow`}
                             className={tradeItemModule.link}
                             style={{margin:"auto 0 auto 10px"}}
                             onClick={()=>
                             {
                                 this.props.selectItemId(this.props.item.id)
                                 this.props.changeItemShowMode(ItemShowMode.View)
                             }}>
                        {this.props.item.name}
                    </NavLink>
                </div>
                <div className={tradeItemModule.bottom_part}
                     style={{marginTop:"10px"}}>
                    <NavLink to={`/user/${this.props.item.ownerId}`}
                             className={tradeItemModule.link}>
                        dealer
                    </NavLink>
                    <div className={uiModule.time}>
                        {getExpiresTime(this.props.item.postedDate)}
                    </div>
                </div>
            </div>
        )
    }
}

export default TradeItem;
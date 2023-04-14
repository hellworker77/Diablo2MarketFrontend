import React from "react";
import {TradeItemProps} from "../../../types/props/TradeItemProps";
import tradeItemModule from "../../../styles/Trade/TradeItem.module.css"
import {NavLink} from "react-router-dom";
import disabledIcon from "../../../images/icons/read.png"
import enabledIcon from "../../../images/icons/skillcalc.png"

type expiredTimeType = {
    value: number,
    name: "year" | "day" | "hour" | "minute" | "second"
}

class TradeItem extends React.Component<TradeItemProps>{
    getExpiresTime = (): string => {
        let milliSeconds = this.props.item.postedDate.getTime()
        let nowMilliSeconds = Date.now()
        let diffMilliSeconds = nowMilliSeconds - milliSeconds

        let timeHandlingArray = new Array<expiredTimeType>();

        timeHandlingArray.push({value: Math.floor(diffMilliSeconds / 1000) % 60, name: "second"})
        timeHandlingArray.push({value: Math.floor(diffMilliSeconds / 1000 / 60) % 60, name: "minute"})
        timeHandlingArray.push({value: Math.floor(diffMilliSeconds / 1000 / 60 / 60) % 24, name: "hour"})
        timeHandlingArray.push({value: Math.floor(diffMilliSeconds / 1000 / 60 / 60 / 24) % 365, name: "day"})
        timeHandlingArray.push({value: Math.floor(diffMilliSeconds / 1000 / 60 / 60 / 24 / 365) , name: "year"})


        let result = timeHandlingArray.reverse().find(x=>x.value != 0);

        if(result === undefined){
            return "0 seconds ago";
        }

        if(result.value > 1){
            result.name += 's';
        }

        return `${result.value} ${result.name} ago`;
    }
    render() {
        return(
            <div className={tradeItemModule.container}>
                <div className={tradeItemModule.button}>
                    <img alt={"icon"}
                         src={this.props.isAuthorized?enabledIcon:disabledIcon}/>
                </div>
                <div className={tradeItemModule.top_part}>
                    <div className={tradeItemModule.price}>
                        {this.props.item.price}
                    </div>
                    <NavLink to={`/item/${this.props.item.id}`}
                             className={tradeItemModule.link}>
                        {this.props.item.name}
                    </NavLink>
                </div>
                <div className={tradeItemModule.bottom_part}>
                    <NavLink to={`/user/${this.props.item.ownerId}`}
                             className={tradeItemModule.link}>
                        dealer
                    </NavLink>
                    <div className={tradeItemModule.time}>
                        {this.getExpiresTime()}
                    </div>
                </div>
            </div>
        )
    }
}

export default TradeItem;
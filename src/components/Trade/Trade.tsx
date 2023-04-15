import React from 'react';
import {TradeProps} from "../../types/props/TradeProps";
import TradeItemContainer from "./TradeItem/TradeItemContainer";
import tradeModule from "../../styles/Trade/Trade.module.css"
import tradeHeaderIcon from "../../images/icons/holygrail.png"

class Trade extends React.Component<TradeProps>{
    componentDidMount() {

    }
    render() {
        return (
            <div className={tradeModule.container}>
                <div className={tradeModule.header}>
                    <img alt={"icon"} src={tradeHeaderIcon}></img>
                    <div> Recent trading activity </div>
                </div>
                <div className={tradeModule.content}>
                    {
                        this.props.items.map(x=>
                            <div key={x.id} className={tradeModule.item}><TradeItemContainer item={x} /></div>
                        )}
                </div>
            </div>
        )
    }
}

export default Trade;
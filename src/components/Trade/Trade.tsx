import React from 'react';
import {TradeProps} from "../../types/props/TradeProps";
import TradeItemContainer from "./TradeItem/TradeItemContainer";
import tradeModule from "../../styles/Trade/Trade.module.css"
import tradeHeaderIcon from "../../images/icons/holygrail.png"
import {GetChunkRequestManager} from "../../utilities/RequestHandlerFactory/Trading/GetChunkRequestManager";

class Trade extends React.Component<TradeProps>{
    async componentDidMount() {
        let requestManager = new GetChunkRequestManager({index: 0, size: 3});
        let items = await requestManager.execute();

        if(items !== undefined){
            this.props.loadItems(items);
        }

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
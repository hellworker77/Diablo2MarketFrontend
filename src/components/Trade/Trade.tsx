import React, {useEffect, useState} from 'react';
import {TradeProps} from "../../types/props/TradeProps";
import TradeItemContainer from "./TradeItem/TradeItemContainer";
import tradeModule from "../../styles/Trade/Trade.module.css"
import tradeHeaderIcon from "../../images/icons/holygrail.png"
import {GetChunkRequestManager} from "../../utilities/RequestHandlerFactory/Trading/GetChunkRequestManager";
import {fetchData} from "../../utilities/FetchData";
import {ItemType} from "../../types/models/ItemType";
import {NotificationProps} from "../Notification/CustomNotification";

const Trade = (props: TradeProps) => {

    const [notification, setNotification] = useState<NotificationProps>();

    useEffect(() => {
        let requestManager = new GetChunkRequestManager({index: 0, size: 3});
        let fetch = fetchData<Array<ItemType>>(requestManager.getResponse(), setNotification, typeof Trade)

        fetch.then(items => {
            if (items !== undefined) {
                props.loadItems(items);
            }
        })

    }, [])

    return (
        <div className={tradeModule.container}>
            <div className={tradeModule.header}>
                <img alt={"icon"} src={tradeHeaderIcon}></img>
                <div> Recent trading activity</div>
            </div>
            <div className={tradeModule.content}>
                {
                    props.items.map(x =>
                        <div key={x.id} className={tradeModule.item}><TradeItemContainer item={x}/></div>
                    )}
            </div>
        </div>
    )

}

export default Trade;
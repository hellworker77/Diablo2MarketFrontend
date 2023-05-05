import {ItemType} from "../models/ItemType";
import {NotifyPropsOwn} from "./NotificationProps";

export type TradeProps = TradePropsState & TradePropsDispatch


export type TradePropsState = {
    items: Array<ItemType>,
}

export type TradePropsDispatch = {
    loadItems: (items: Array<ItemType>) => void
    addNotify: (notify: NotifyPropsOwn) => void
}


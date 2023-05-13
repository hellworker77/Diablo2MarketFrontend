import {ItemType} from "../models/ItemType";
import {NotifyPropsOwn} from "./NotificationProps";
import {Token} from "../../utilities/TokenManager";

export type TradeProps = TradePropsState & TradePropsDispatch


export type TradePropsState = {
    items: Array<ItemType>
    token: Token | null
}

export type TradePropsDispatch = {
    loadItems: (items: Array<ItemType>) => void
    addNotify: (notify: NotifyPropsOwn) => void
}


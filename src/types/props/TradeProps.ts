import {ItemType} from "../models/ItemType";

export type TradeProps = TradePropsState & TradePropsDispatch


export type TradePropsState = {
    items: Array<ItemType>,
}

export type TradePropsDispatch = {
    loadItems: (items: Array<ItemType>) => void
}


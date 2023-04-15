import {ItemType} from "../models/ItemType";

export type TradeItemProps = TradeItemPropsState & TradeItemPropsDispatch & TradeItemPropsOwn


export type TradeItemPropsState = {
    isAuthorized: boolean
}

export type TradeItemPropsDispatch = {
    selectItemId: (id: string) => void
}

export type TradeItemPropsOwn = {
    item: ItemType
}
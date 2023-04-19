import {ItemType} from "../models/ItemType";
import {ItemShowMode} from "../models/enums/ItemShowMode";

export type TradeItemProps = TradeItemPropsState & TradeItemPropsDispatch & TradeItemPropsOwn


export type TradeItemPropsState = {
    isAuthorized: boolean
}

export type TradeItemPropsDispatch = {
    selectItemId: (id: string) => void
    selectUserId: (id: string) => void
    changeItemShowMode: (mode: ItemShowMode) => void
}

export type TradeItemPropsOwn = {
    item: ItemType
}
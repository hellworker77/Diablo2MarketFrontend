import {ItemType} from "../../models/ItemType";
import {DealType} from "../../models/DealType";
import {ItemShowMode} from "../../models/enums/ItemShowMode";

export type TradingStateType = {
    items: Array<ItemType>
    last24deals: Array<DealType>
    selectedItemId: string
    itemShowMode: ItemShowMode
    loadedItem: ItemType | null
    deals: Array<DealType>
}
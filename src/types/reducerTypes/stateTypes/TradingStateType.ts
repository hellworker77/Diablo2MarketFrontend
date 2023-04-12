import {ItemType} from "../../models/ItemType";
import {DealType} from "../../models/DealType";

export type TradingStateType = {
    items: Array<ItemType>
    itemLoadedById: ItemType | null,
    deals: Array<DealType>,
    dealLoadedById: DealType | null
}
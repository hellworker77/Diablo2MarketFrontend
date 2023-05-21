import {ItemType} from "../../models/ItemType";
import {DealType} from "../../models/DealType";
import {ItemShowMode} from "../../models/enums/ItemShowMode";
import {Token} from "../../../utilities/TokenManager";
import {ApplicationUserType} from "../../models/ApplicationUserType";
import {ItemRarityEnum} from "../../models/enums/ItemRarityEnum";
import {ItemAttributeType} from "../../models/ItemAttributeType";

export type TradingStateType = {
    items: Array<ItemType>
    last24deals: Array<DealType>
    selectedItemId: string
    itemShowMode: ItemShowMode
    loadedItem: ItemType | null
    deals: Array<DealType>
    itemNameToUpload: string
    itemPriceToUpload: number
    itemRarityToUpload: ItemRarityEnum
    itemAttributesToUpload: Array<ItemAttributeType>
}
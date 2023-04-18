import {ItemRarityEnum} from "./enums/ItemRarityEnum";
import {ItemAttributeType} from "./ItemAttributeType";

export type ItemType = {
    id: string,
    price: number,
    dealId: string | null,
    rarity: ItemRarityEnum,
    attributes: Array<ItemAttributeType>,
    name: string,
    ownerId: string,
    postedDate: string
}
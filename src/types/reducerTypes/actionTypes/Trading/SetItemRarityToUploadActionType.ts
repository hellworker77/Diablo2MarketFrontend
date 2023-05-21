import {ItemRarityEnum} from "../../../models/enums/ItemRarityEnum";

export const SET_ITEM_RARITY_TO_UPLOAD = "SET_ITEM_RARITY_TO_UPLOAD"

export type SetItemRarityToUploadActionType = {
    type: typeof SET_ITEM_RARITY_TO_UPLOAD,
    rarity: ItemRarityEnum
}
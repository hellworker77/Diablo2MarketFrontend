import {ItemType} from "../../../models/ItemType";

export const LOAD_ITEM_ACTION_TYPE = "LOAD_ITEM_ACTION_TYPE"

export type LoadItemActionType = {
    item: ItemType
    type: typeof LOAD_ITEM_ACTION_TYPE
}
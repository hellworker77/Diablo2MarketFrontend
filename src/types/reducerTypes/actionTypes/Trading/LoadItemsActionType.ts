import {ItemType} from "../../../models/ItemType";

export const LOAD_ITEMS_ACTION_TYPE = "LOAD_ITEMS_ACTION_TYPE"

export type LoadItemsActionType = {
    items: Array<ItemType>
    type: typeof LOAD_ITEMS_ACTION_TYPE
}
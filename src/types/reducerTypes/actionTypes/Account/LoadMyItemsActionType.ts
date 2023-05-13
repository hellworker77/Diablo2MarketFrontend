import {ItemType} from "../../../models/ItemType";

export const LOAD_MY_ITEMS_ACTION_TYPE = "LOAD_MY_ITEMS_ACTION_TYPE"
export type LoadMyItemsActionType = {
    items: Array<ItemType>
    type: typeof LOAD_MY_ITEMS_ACTION_TYPE
}
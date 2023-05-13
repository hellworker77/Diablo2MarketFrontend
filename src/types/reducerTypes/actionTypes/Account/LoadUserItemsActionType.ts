import {ItemType} from "../../../models/ItemType";

export const LOAD_USER_ITEMS_ACTION_TYPE = "LOAD_USER_ITEMS_ACTION_TYPE"
export type LoadUserItemsActionType = {
    items: Array<ItemType>
    type: typeof LOAD_USER_ITEMS_ACTION_TYPE
}
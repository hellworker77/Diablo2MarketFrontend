import {ItemShowMode} from "../../../models/enums/ItemShowMode";

export const SELECT_ITEM_SHOW_MODE_ACTION_TYPE = "SELECT_ITEM_SHOW_MODE_ACTION_TYPE"

export type SelectItemShowModeActionType = {
    mode: ItemShowMode,
    type: typeof SELECT_ITEM_SHOW_MODE_ACTION_TYPE
}
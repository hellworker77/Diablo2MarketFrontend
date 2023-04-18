import {SelectItemActionType} from "./Trading/SelectItemActionType";
import {SelectItemShowModeActionType} from "./Trading/SelectItemShowModeActionType";
import {LoadItemActionType} from "./Trading/LoadItemActionType";
import {LoadItemsActionType} from "./Trading/LoadItemsActionType";

export type GlobalTradingActionType = SelectItemActionType |
    SelectItemShowModeActionType |
    LoadItemActionType |
    LoadItemsActionType
import {SelectItemActionType} from "./Trading/SelectItemActionType";
import {SelectItemShowModeActionType} from "./Trading/SelectItemShowModeActionType";
import {LoadItemActionType} from "./Trading/LoadItemActionType";
import {LoadItemsActionType} from "./Trading/LoadItemsActionType";
import {LoadLast24HoursDealsActionType} from "./Trading/LoadLast24HoursDealsActionType";
import {LoadLastDealsActionType} from "./Trading/LoadLastDealsActionType";

export type GlobalTradingActionType = SelectItemActionType |
    SelectItemShowModeActionType |
    LoadItemActionType |
    LoadItemsActionType |
    LoadLast24HoursDealsActionType |
    LoadLastDealsActionType
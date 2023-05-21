import {SelectItemActionType} from "./Trading/SelectItemActionType";
import {SelectItemShowModeActionType} from "./Trading/SelectItemShowModeActionType";
import {LoadItemActionType} from "./Trading/LoadItemActionType";
import {LoadItemsActionType} from "./Trading/LoadItemsActionType";
import {LoadLast24HoursDealsActionType} from "./Trading/LoadLast24HoursDealsActionType";
import {LoadLastDealsActionType} from "./Trading/LoadLastDealsActionType";
import {SetItemNameToUploadActionType} from "./Trading/SetItemNameToUploadActionType";
import {SetItemRarityToUploadActionType} from "./Trading/SetItemRarityToUploadActionType";
import {AddAttributeItemActionType} from "./Trading/AddAttributeItemActionType";
import {SetItemAttributeActionType} from "./Trading/SetItemAttributeActionType";
import {DeleteItemAttributeActionType} from "./Trading/DeleteItemAttributeActionType";
import {SetItemPriceToUploadActionType} from "./Trading/SetItemPriceToUploadActionType";

export type GlobalTradingActionType = SelectItemActionType |
    SelectItemShowModeActionType |
    LoadItemActionType |
    LoadItemsActionType |
    LoadLast24HoursDealsActionType |
    LoadLastDealsActionType |
    SetItemNameToUploadActionType |
    SetItemPriceToUploadActionType |
    SetItemRarityToUploadActionType |
    AddAttributeItemActionType |
    SetItemAttributeActionType |
    DeleteItemAttributeActionType
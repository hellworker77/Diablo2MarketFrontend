import {AddBalanceActionType} from "./Account/AddBalanceActionType";
import {LoadUserActionType} from "./Account/LoadUserActionType";
import {LoadMeActionType} from "./Account/LoadMeActionType";
import {SelectUserIdActionType} from "./Account/SelectUserIdActionType";

export type GlobalAccountActionType = AddBalanceActionType |
    LoadUserActionType |
    LoadMeActionType |
    SelectUserIdActionType
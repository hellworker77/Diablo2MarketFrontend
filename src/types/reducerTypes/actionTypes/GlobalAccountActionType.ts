import {AddBalanceActionType} from "./Account/AddBalanceActionType";
import {LoadUserActionType} from "./Account/LoadUserActionType";
import {LoadMeActionType} from "./Account/LoadMeActionType";
import {SelectUserIdActionType} from "./Account/SelectUserIdActionType";
import {UpdateNameActionType} from "./Account/UpdateNameActionType";
import {UpdateEmailActionType} from "./Account/UpdateEmailActionType";
import {UpdatePasswordActionType} from "./Account/UpdatePasswordActionType";
import {LoadAccountTokenActionType} from "./Account/LoadAccountTokenActionType";
import {UpdateVerifyPasswordActionType} from "./Account/UpdateVerifyPasswordActionType";

export type GlobalAccountActionType = AddBalanceActionType |
    LoadUserActionType |
    LoadMeActionType |
    SelectUserIdActionType |
    UpdateNameActionType |
    UpdateEmailActionType |
    UpdatePasswordActionType |
    UpdateVerifyPasswordActionType |
    LoadAccountTokenActionType
import {ApplicationUserType} from "../../../models/ApplicationUserType";

export const LOAD_USER_ACTION_TYPE = "LOAD_USER_ACTION_TYPE"
export type LoadUserActionType = {
    user: ApplicationUserType
    type: typeof LOAD_USER_ACTION_TYPE
}
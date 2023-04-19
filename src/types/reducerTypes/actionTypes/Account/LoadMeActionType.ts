import {ApplicationUserType} from "../../../models/ApplicationUserType";

export const LOAD_ME_ACTION_TYPE = "LOAD_ME_ACTION_TYPE"
export type LoadMeActionType = {
    me: ApplicationUserType
    type: typeof LOAD_ME_ACTION_TYPE
}
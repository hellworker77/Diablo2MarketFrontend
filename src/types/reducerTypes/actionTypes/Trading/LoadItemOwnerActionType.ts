import {ApplicationUserType} from "../../../models/ApplicationUserType";

export const LOAD_ITEM_OWNER_ACTION_TYPE = "LOAD_ITEM_OWNER_ACTION_TYPE"

export type LoadItemOwnerActionType = {
    type: typeof LOAD_ITEM_OWNER_ACTION_TYPE
    user: ApplicationUserType
}
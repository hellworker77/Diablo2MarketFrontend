import {DealType} from "../../../models/DealType";

export const LOAD_USER_DEALS_ACTION_TYPE = "LOAD_USER_DEALS_ACTION_TYPE"
export type LoadUserDealsActionType = {
    deals: Array<DealType>
    type: typeof LOAD_USER_DEALS_ACTION_TYPE
}
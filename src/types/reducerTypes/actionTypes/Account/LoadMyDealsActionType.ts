import {DealType} from "../../../models/DealType";

export const LOAD_ME_DEALS_ACTION_TYPE = "LOAD_MY_DEALS_ACTION_TYPE"
export type LoadMyDealsActionType = {
    deals: Array<DealType>
    type: typeof LOAD_ME_DEALS_ACTION_TYPE
}
import {DealType} from "../../../models/DealType";

export const LOAD_SUCCESS_DEALS_ACTION_TYPE = "LOAD_SUCCESS_DEALS_ACTION_TYPE"
export type LoadSuccessDealsActionType = {
    deals: Array<DealType>
    type: typeof LOAD_SUCCESS_DEALS_ACTION_TYPE
}
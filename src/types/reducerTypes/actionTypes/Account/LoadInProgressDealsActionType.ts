import {DealType} from "../../../models/DealType";

export const LOAD_IN_PROGRESS_DEALS_ACTION_TYPE = "LOAD_IN_PROGRESS_DEALS_ACTION_TYPE"
export type LoadInProgressDealsActionType = {
    deals: Array<DealType>
    type: typeof LOAD_IN_PROGRESS_DEALS_ACTION_TYPE
}
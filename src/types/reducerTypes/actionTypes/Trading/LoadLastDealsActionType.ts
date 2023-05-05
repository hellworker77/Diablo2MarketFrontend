import {DealType} from "../../../models/DealType";

export const LOAD_LAST_DEALS_ACTION_TYPE = "LOAD_LAST_DEALS_ACTION_TYPE"

export type LoadLastDealsActionType = {
    type: typeof LOAD_LAST_DEALS_ACTION_TYPE,
    deals: Array<DealType>
}
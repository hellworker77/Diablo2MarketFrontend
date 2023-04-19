import {DealType} from "../../../models/DealType";

export const LOAD_LAST_24_HOURS_ACTION_TYPE = "LOAD_LAST_24_HOURS_ACTION_TYPE"

export type LoadLast24HoursDealsActionType = {
    type: typeof LOAD_LAST_24_HOURS_ACTION_TYPE,
    deals: Array<DealType>
}
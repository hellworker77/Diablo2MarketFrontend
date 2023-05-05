import {ApplicationUserType} from "../models/ApplicationUserType";
import {Token} from "../../utilities/TokenManager";
import {DealType} from "../models/DealType";
import {NotifyPropsOwn} from "./NotificationProps";

export type LastDealsProps = LastDealsPropsState & LastDealsPropsDispatch

export type LastDealsPropsState = {
    lastDeals: Array<DealType>
}

export type LastDealsPropsDispatch = {
    loadLastDeals: (deals: Array<DealType>) => void
    addNotify: (notify: NotifyPropsOwn) => void
}
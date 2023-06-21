import {ApplicationUserType} from "../models/ApplicationUserType";
import {Token} from "../../utilities/TokenManager";
import {DealType} from "../models/DealType";
import {ItemType} from "../models/ItemType";
import {NotifyPropsOwn} from "./NotificationProps";

export type ProfileProps = ProfilePropsState & ProfilePropsDispatch

export type ProfilePropsState = {
    token: Token | null
    me: ApplicationUserType | null
    myDeals: Array<DealType> | null
    mySuccessDeals: Array<DealType> | null
    myInProgressDeals: Array<DealType> | null
    myItems: Array<ItemType> | null
}

export type ProfilePropsDispatch = {
    loadMe: (user: ApplicationUserType) => void
    loadMyDeals : (deals: Array<DealType>) => void
    loadMySuccessDeals : (deals: Array<DealType>) => void
    loadMyInProgressDeals : (deals: Array<DealType>) => void
    loadMyItems : (deals: Array<ItemType>) => void
    addNotify: (notify: NotifyPropsOwn) => void
}
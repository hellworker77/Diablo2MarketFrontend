import {ApplicationUserType} from "../models/ApplicationUserType";
import {NotifyPropsOwn} from "./NotificationProps";
import {DealType} from "../models/DealType";
import {ItemType} from "../models/ItemType";

export type UserProps = UserPropsState & UserPropsDispatch

export type UserPropsState = {
    selectedUserId: string,
    user: ApplicationUserType | null
    userDeals: Array<DealType> | null
    userItems: Array<ItemType> | null
}

export type UserPropsDispatch = {
    loadUser: (user: ApplicationUserType) => void
    loadUserDeals : (deals: Array<DealType>) => void
    loadUserItems : (deals: Array<ItemType>) => void
    addNotify: (notify: NotifyPropsOwn) => void
}
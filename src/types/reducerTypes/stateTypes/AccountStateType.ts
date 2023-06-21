import {ApplicationUserType} from "../../models/ApplicationUserType";
import {Token} from "../../../utilities/TokenManager";
import {ItemType} from "../../models/ItemType";
import {DealType} from "../../models/DealType";

export type AccountStateType = {
    token: Token | null
    me: UserGrantInfoType | null
    loadedUserGrantInfo: UserGrantInfoType | null
    selectedUserId: string,
    name: string,
    email: string,
    password: string,
    verifyPassword: string
}

export type UserGrantInfoType = {
    user: ApplicationUserType | null
    userItems: Array<ItemType> | null
    userDeals: Array<DealType> | null
    userInProgressDeals?: Array<DealType> | null
    userSuccessDeals?: Array<DealType> | null
}
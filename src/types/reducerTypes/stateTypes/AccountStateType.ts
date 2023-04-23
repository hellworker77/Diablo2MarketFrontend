import {ApplicationUserType} from "../../models/ApplicationUserType";
import {Token} from "../../../utilities/TokenManager";

export type AccountStateType = {
    token: Token | null
    me: ApplicationUserType | null
    loadedUser: ApplicationUserType | null
    selectedUserId: string,
    name: string,
    email: string,
    password: string,
    verifyPassword: string
}
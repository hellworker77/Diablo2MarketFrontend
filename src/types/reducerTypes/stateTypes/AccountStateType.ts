import {ApplicationUserType} from "../../models/ApplicationUserType";

export type AccountStateType = {
    isAuthorized: boolean
    me: ApplicationUserType | null
    loadedUser: ApplicationUserType | null
    selectedUserId: string,
    name: string,
    email: string,
    password: string
}
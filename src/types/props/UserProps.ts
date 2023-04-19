import {ApplicationUserType} from "../models/ApplicationUserType";

export type UserProps = UserPropsState & UserPropsDispatch

export type UserPropsState = {
    selectedUserId: string,
    loadedUser: ApplicationUserType | null
}

export type UserPropsDispatch = {
    loadUser: (user: ApplicationUserType) => void
}
import {ApplicationUserType} from "../models/ApplicationUserType";
import {NotifyPropsOwn} from "./NotificationProps";

export type UserProps = UserPropsState & UserPropsDispatch

export type UserPropsState = {
    selectedUserId: string,
    loadedUser: ApplicationUserType | null
}

export type UserPropsDispatch = {
    loadUser: (user: ApplicationUserType) => void
    addNotify: (notify: NotifyPropsOwn) => void
}
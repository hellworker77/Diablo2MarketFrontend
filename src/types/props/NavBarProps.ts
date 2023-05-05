import {Token} from "../../utilities/TokenManager";
import {ApplicationUserType} from "../models/ApplicationUserType";
import {NotifyPropsOwn} from "./NotificationProps";

export type NavBarProps = NavBarPropsState & NavBarPropsDispatch


export type NavBarPropsState = {
    token: Token | null
}

export type NavBarPropsDispatch = {
    loadMe: (me: ApplicationUserType) => void
    addNotify: (notify: NotifyPropsOwn) => void
}


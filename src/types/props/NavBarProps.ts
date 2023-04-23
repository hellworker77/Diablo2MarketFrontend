import {Token} from "../../utilities/TokenManager";
import {ApplicationUserType} from "../models/ApplicationUserType";

export type NavBarProps = NavBarPropsState & NavBarPropsDispatch


export type NavBarPropsState = {
    token: Token | null
}

export type NavBarPropsDispatch = {
    loadMe: (me: ApplicationUserType) => void
}


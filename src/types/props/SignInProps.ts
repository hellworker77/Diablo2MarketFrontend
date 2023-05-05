import {Token} from "../../utilities/TokenManager";
import {NotifyPropsOwn} from "./NotificationProps";

export type SignInProps = SignInPropsState & SignInPropsDispatch

export type SignInPropsState = {
    name: string,
    password: string,
}

export type SignInPropsDispatch = {
    updateName: (name: string) => void
    updatePassword: (password: string) => void
    loadAccountToken: (token: Token) => void
    addNotify: (notify: NotifyPropsOwn) => void
}
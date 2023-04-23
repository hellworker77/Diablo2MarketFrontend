import {Token} from "../../utilities/TokenManager";

export type SignInProps = SignInPropsState & SignInPropsDispatch

export type SignInPropsState = {
    name: string,
    password: string,
}

export type SignInPropsDispatch = {
    updateName: (name: string) => void
    updatePassword: (password: string) => void
    loadAccountToken: (token: Token) => void
}
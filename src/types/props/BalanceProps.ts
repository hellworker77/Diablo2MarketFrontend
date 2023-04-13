import {ApplicationUserType} from "../models/ApplicationUserType";

export type BalanceProps = BalancePropsState & BalancePropsDispatch

export type BalancePropsState = {
    me: ApplicationUserType | null
}

export type BalancePropsDispatch = {
    addBalance: (increment: number) => void
}

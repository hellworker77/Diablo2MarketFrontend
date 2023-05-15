import {PaymentType} from "../models/PaymentType";
import {Token} from "../../utilities/TokenManager";
import {NotifyPropsOwn} from "./NotificationProps";

export type PaymentProps = PaymentPropsState & PaymentPropsDispatch


export type PaymentPropsState = {
    token: Token | null
    payments: Array<PaymentType> | null
    selectedPaymentId: string | null
}

export type PaymentPropsDispatch = {
    selectPayment: (id: string) => void
    addNotify: (notify: NotifyPropsOwn) => void
}


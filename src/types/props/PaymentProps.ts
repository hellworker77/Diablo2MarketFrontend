import {PaymentType} from "../models/PaymentType";

export type PaymentProps = PaymentPropsState & PaymentPropsDispatch


export type PaymentPropsState = {
    payments: Array<PaymentType> | null
    selectedPaymentId: string | null
}

export type PaymentPropsDispatch = {
    selectPayment: (id: string) => void
}


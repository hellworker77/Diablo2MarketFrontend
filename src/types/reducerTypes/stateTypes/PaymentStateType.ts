import {PaymentType} from "../../models/PaymentType";

export type PaymentStateType = {
    payments: Array<PaymentType> | null,
    selectedPaymentId: string | null
}
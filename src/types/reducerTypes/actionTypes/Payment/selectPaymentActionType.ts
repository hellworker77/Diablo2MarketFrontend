import {PaymentType} from "../../../models/PaymentType";

export const SELECT_PAYMENT_ACTION_TYPE = "SELECT_PAYMENT_ACTION_TYPE"
export type SelectPaymentActionType = {
    id: string,
    type: typeof SELECT_PAYMENT_ACTION_TYPE
}
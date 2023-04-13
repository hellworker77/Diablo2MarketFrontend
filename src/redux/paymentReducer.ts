import {PaymentStateType} from "../types/reducerTypes/stateTypes/PaymentStateType";
import {GlobalPaymentActionType} from "../types/reducerTypes/actionTypes/GlobalPaymentActionType";
import {
    SELECT_PAYMENT_ACTION_TYPE,
    SelectPaymentActionType
} from "../types/reducerTypes/actionTypes/Payment/selectPaymentActionType";

let initialState: PaymentStateType = {
    payments: [
        {
            id: "1",
            value: 1.99,
            currency: "$",
            receive: 50
        },
        {
            id: "2",
            value: 4.99,
            currency: "$",
            receive: 300
        },
        {
            id: "3",
            value: 9.99,
            currency: "$",
            receive: 650
        },
        {
            id: "4",
            value: 19.99,
            currency: "$",
            receive: 1500
        },
    ],
    selectedPaymentId: "1"
}

const AccountReducer = (state = initialState, action: GlobalPaymentActionType): PaymentStateType => {
    switch (action.type) {
        case SELECT_PAYMENT_ACTION_TYPE:
            return {
                ...state,
                selectedPaymentId: action.id
            }
        default:
            return {
                ...state
            }
    }
}

export const selectPaymentActionCreate = (id: string): SelectPaymentActionType => ({
    type: SELECT_PAYMENT_ACTION_TYPE, id: id
})

export default AccountReducer;
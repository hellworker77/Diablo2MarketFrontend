import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Payment from "./Payment";
import {GlobalPaymentActionType} from "../../types/reducerTypes/actionTypes/GlobalPaymentActionType";
import {PaymentPropsDispatch, PaymentPropsState} from "../../types/props/PaymentProps";
import {selectPaymentActionCreate} from "../../redux/paymentReducer";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../redux/notificationReducer";
import {GlobalNotificationActionType} from "../../types/reducerTypes/actionTypes/GlobalNotificationActionType";

let mapStateToProps = (state: AppStateType): PaymentPropsState => {
    return {
        token: state.accountReducer.token,
        payments: state.paymentReducer.payments,
        selectedPaymentId: state.paymentReducer.selectedPaymentId
    }
}
let mapDispatchToProps = (dispatch: Dispatch<GlobalPaymentActionType | GlobalNotificationActionType>): PaymentPropsDispatch => {
    return {
        selectPayment: (id: string) => {
            dispatch(selectPaymentActionCreate(id))
        },
        addNotify: (notify: NotifyPropsOwn) => {
            dispatch(addNotifyActionCreate(notify))
        }
    }
}


let PaymentContainer = connect(mapStateToProps, mapDispatchToProps)(Payment);

export default PaymentContainer;
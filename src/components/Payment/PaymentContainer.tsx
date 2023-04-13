import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Payment from "./Payment";
import {GlobalPaymentActionType} from "../../types/reducerTypes/actionTypes/GlobalPaymentActionType";
import {PaymentPropsDispatch, PaymentPropsState} from "../../types/props/PaymentProps";
import {selectPaymentActionCreate} from "../../redux/paymentReducer";

let mapStateToProps = (state: AppStateType): PaymentPropsState => {
    return {
        payments: state.paymentReducer.payments,
        selectedPaymentId: state.paymentReducer.selectedPaymentId
    }
}
let mapDispatchToProps = (dispatch: Dispatch<GlobalPaymentActionType>): PaymentPropsDispatch => {
    return {
        selectPayment: (id: string) => {
            dispatch(selectPaymentActionCreate(id))
        }
    }
}


let PaymentContainer = connect(mapStateToProps, mapDispatchToProps)(Payment);

export default PaymentContainer;
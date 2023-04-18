import React from 'react';
import {PaymentProps} from "../../types/props/PaymentProps";
import paymentModule from "../../styles/Payment/Payment.module.css"
import uiModule from '../../styles/Ui.module.css'
import goldDrop from "../../images/icons/golddrop.png"

class Payment extends React.Component<PaymentProps> {
    render() {
        return (
            <div className={uiModule.frame_gray}
                 style={{marginTop: "100px", width: "20vw"}}>
                <div style={{margin: "0 auto"}} className={paymentModule.header}>Payment</div>
                <table className={paymentModule.payment}>
                    {this.props.payments?.map(payment =>
                        <tr key={payment.id} className={paymentModule.payment} onClick={()=> this.props.selectPayment(payment.id)}>
                            <td>
                                <div className={paymentModule.payment_flag}>
                                    {payment.id === this.props.selectedPaymentId ?
                                        <div className={paymentModule.payment_selected_flag}></div> : <></>}
                                </div>
                            </td>
                            <td>
                                {`${payment.value} ${payment.currency}`}
                            </td>
                            <td>
                            </td>
                            <td style={{display:"flex"}}>
                                {payment.receive}
                                <img alt={"golddrop-icon"} src={goldDrop}></img>
                            </td>
                            <td>

                            </td>
                        </tr>
                    )}
                </table>
                <div className={paymentModule.button}>
                    <div className={paymentModule.button_inner}>
                        <div style={{margin: "auto"}}>Pay!</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;
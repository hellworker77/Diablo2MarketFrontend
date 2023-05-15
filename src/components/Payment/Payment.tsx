import React, {useMemo} from 'react';
import paymentModule from "../../styles/Payment/Payment.module.css"
import uiModule from "../../styles/Ui.module.css"
import moneyIcon from "../../images/icons/golddrop.png"
import {PaymentProps} from "../../types/props/PaymentProps";
import {
    IncreaseBalanceRequestManager
} from "../../utilities/RequestManagers/AccountManagers/IncreaseBalanceRequestManager";

const Payment = (props: PaymentProps) => {

    const increaseBalanceRequestManager = useMemo(() => {
        return new IncreaseBalanceRequestManager(props.addNotify, Payment.name)
    }, [])

    const increaseBalance = () => {
        let amount = props.payments?.find(x => x.id === props.selectedPaymentId)?.receive

        if (props.token != null && amount !== undefined) {

            let params = {
                token: props.token,
                amount: amount
            }

            increaseBalanceRequestManager.buildConfig(params)
            increaseBalanceRequestManager.queryData().then()
        }
    }

    return (
        <div className={uiModule.frame_gray}
             style={{marginTop: "100px", width: "20vw"}}>
            <div style={{margin: "0 auto"}} className={paymentModule.header}>Payment</div>
            <table className={paymentModule.payment}>
                {props.payments?.map(payment =>
                    <tr key={payment.id} className={paymentModule.payment}
                        onClick={() => props.selectPayment(payment.id)}>
                        <td>
                            <div className={paymentModule.payment_flag}>
                                {payment.id === props.selectedPaymentId ?
                                    <div className={paymentModule.payment_selected_flag}></div> : <></>}
                            </div>
                        </td>
                        <td>
                            {`${payment.value} ${payment.currency}`}
                        </td>
                        <td>
                        </td>
                        <td style={{display: "flex"}}>
                            {payment.receive}
                            <img alt={"moneyIcon"} src={moneyIcon}></img>
                        </td>
                        <td>

                        </td>
                    </tr>
                )}
            </table>
            <div className={uiModule.button}>
                <div className={uiModule.brown}>
                    <div style={{margin: "auto 20px"}}
                         onClick={() => increaseBalance()}>
                        Pay!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
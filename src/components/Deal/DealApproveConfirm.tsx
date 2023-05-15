import dealModule from "../../styles/Deal/Deal.module.css"
import uiModule from "../../styles/Ui.module.css"
import {useEffect, useState} from "react";

export type DealApproveConfirmProps = {
    onConfirmed: () => void
    onCanceled: () => void
}

export const DealApproveConfirm = (props: DealApproveConfirmProps) => {
    const [timeLeft, setTimeLeft] = useState(5);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        let countdownTimer: NodeJS.Timeout;

        if (timeLeft > 0) {
            countdownTimer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else {
            setIsDisabled(true);
        }

        return () => clearTimeout(countdownTimer);
    }, [timeLeft]);

    const buttonText = isDisabled ? `Confirm` : `Confirm (${timeLeft})`;

    const handleClick = () => {
        if (isDisabled) {
            props.onConfirmed()
        }
    };
    return (
        <div className={`${dealModule.confirm} ${uiModule.frame_gray}`}>
            <div className={`${uiModule.header} ${dealModule.title}`}>
                <p>Approve Deal</p>
            </div>
            <div className={`${uiModule.header} ${dealModule.description}`}>
                <p>Are you sure</p>
                <p>that you want to approve this deal?</p>
            </div>
            <div style={{display: "inline-flex", flexDirection: "row", margin: "auto"}}>
                <div data-disabled={!isDisabled}
                     className={uiModule.button}
                     onClick={() => handleClick()}>
                    <div className={uiModule.green}>
                        <div style={{margin: "10px"}}>
                            {buttonText}
                        </div>
                    </div>

                </div>
                <div className={uiModule.button}
                     onClick={() => props.onCanceled()}>
                    <div className={uiModule.gray}>
                        <div style={{margin: "10px"}}>
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
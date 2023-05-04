import React, {useEffect, useState} from 'react'
import notificationModule from '../../styles/Notification.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBell,
    faCircleCheck,
    faCircleExclamation,
    faSkullCrossbones,
    faTriangleExclamation,
    faXmark,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";

export enum NotificationStatus {
    None,
    Info,
    Success,
    Warning,
    Error,
    Critical
}

export type NotificationProps = {
    status: NotificationStatus
    message: string
    isVisible: boolean,
}

type TemplateType = {
    icon: IconDefinition
    design: string
}

type FadeTemplateType = {
    remaining: number,
    display: boolean
}
let abortController = new AbortController();


const CustomNotification = (props: NotificationProps) => {
    const [template, setTemplate] =
        useState<TemplateType>(getTemplate(props.status));
    const [fadeTemplate, setFadeTemplate] = useState<FadeTemplateType>({remaining: 0, display: false})
    useEffect(() => {
        setFadeTemplate({remaining: 0, display: fadeTemplate.display})
        setTemplate(getTemplate(props.status))

        if(abortController.signal.aborted){
            abortController = new AbortController()
        }

        fadeOut(5000, 50, setFadeTemplate, abortController.signal).then().catch(error => console.log(error));
    }, [props])

    return (
        <div className={notificationModule.container}
             style={{display: `${fadeTemplate.display ? "block" : "none"}`, opacity: `${fadeTemplate.remaining}`}}>
            <div className={template.design}>
                <FontAwesomeIcon style={{display: "block"}}
                                 icon={template.icon}/>
                <div className={notificationModule.text}>
                    {props.message}
                </div>
                <div className={notificationModule.close}
                     onClick={() => abortController.abort()}>
                    <FontAwesomeIcon style={{display: "block"}}
                                     icon={faXmark}
                    />
                </div>
            </div>
        </div>
    )
}

const getTemplate = (status: NotificationStatus): TemplateType => {
    let design = notificationModule.info;
    let icon = faBell;
    if (status === NotificationStatus.Success) {
        design = notificationModule.success
        icon = faCircleCheck
    } else if (status === NotificationStatus.Warning) {
        design = notificationModule.warning
        icon = faTriangleExclamation
    } else if (status === NotificationStatus.Error) {
        design = notificationModule.error
        icon = faCircleExclamation
    } else if (status === NotificationStatus.Critical) {
        design = notificationModule.critical
        icon = faSkullCrossbones
    }

    return {design: design, icon: icon}
}

async function fadeOut(timeElapsed: number,
                       tick: number,
                       callback: (nextState: FadeTemplateType) => void,
                       signal: AbortSignal): Promise<void> {

    let sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))
    for (let tact = 0; tact < timeElapsed && !signal.aborted; tact += tick) {
        await sleep(tick);
        let remaining = (timeElapsed - tact) / timeElapsed
        callback({display: true, remaining: remaining});
    }
    callback({display: false, remaining: 0});
}

export default CustomNotification;
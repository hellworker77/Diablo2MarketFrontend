import React, {useEffect, useRef, useState} from 'react'
import notificationModule from '../../../styles/Notification.module.css'
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
import {NotifyProps, NotifyStatus} from "../../../types/props/NotificationProps";


type TemplateType = {
    icon: IconDefinition
    design: string
}

const Notify = (props: NotifyProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [template, setTemplate] =
        useState<TemplateType>(getTemplate(props.status));

    useEffect(() => {
        setTemplate(getTemplate(props.status))
        const container = containerRef.current;
        const handleAnimationEnd = (event: AnimationEvent) => {
           props.deleteById(props.id)
        };
        container?.addEventListener("animationend", handleAnimationEnd);
        return () => container?.removeEventListener("animationend", handleAnimationEnd);
    }, [props])

    return (
        <div className={notificationModule.container}
             style={{opacity: "1"}}
             ref={containerRef}>
            <div className={template.design}>
                <FontAwesomeIcon style={{display: "block"}}
                                 icon={template.icon}/>
                <div className={notificationModule.text}>
                    {props.message}
                </div>
                <div className={notificationModule.close}
                     onClick={() => {
                         props.deleteById(props.id)
                     }}>
                    <FontAwesomeIcon style={{display: "block"}}
                                     icon={faXmark}
                    />
                </div>
            </div>
        </div>
    )
}

const getTemplate = (status: NotifyStatus): TemplateType => {
    let design = notificationModule.info;
    let icon = faBell;
    if (status === NotifyStatus.Success) {
        design = notificationModule.success
        icon = faCircleCheck
    } else if (status === NotifyStatus.Warning) {
        design = notificationModule.warning
        icon = faTriangleExclamation
    } else if (status === NotifyStatus.Error) {
        design = notificationModule.error
        icon = faCircleExclamation
    } else if (status === NotifyStatus.Critical) {
        design = notificationModule.critical
        icon = faSkullCrossbones
    }

    return {design: design, icon: icon}
}

export default Notify;
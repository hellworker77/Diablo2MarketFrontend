import React from 'react'
import notificationModule from '../../styles/Notification.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faCircleCheck, faTriangleExclamation, faCircleExclamation, faSkullCrossbones, IconDefinition} from "@fortawesome/free-solid-svg-icons";

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

export class Notification extends React.Component<NotificationProps>{
    private _getTemplate = () : {icon: IconDefinition, design: string} =>{
        let design = notificationModule.info;
        let icon = faBell;
        if(this.props.status === NotificationStatus.Success){
            design = notificationModule.success
            icon = faCircleCheck
        }
        else if(this.props.status === NotificationStatus.Warning){
            design = notificationModule.warning
            icon = faTriangleExclamation
        }
        else if(this.props.status === NotificationStatus.Error){
            design = notificationModule.error
            icon = faCircleExclamation
        }
        else if(this.props.status === NotificationStatus.Critical){
            design = notificationModule.critical
            icon = faSkullCrossbones
        }

        return {design: design, icon: icon}
    }
    render(){
        let template = this._getTemplate();
        return (
            <div className={notificationModule.container}
                 style={{display: `${this.props.isVisible? "block": "none"}`}}>
                <div className={template.design}>
                    <FontAwesomeIcon style={{display:"block"}}
                        icon={template.icon}/>
                    <div className={notificationModule.text}>
                        {this.props.message}
                    </div>
                </div>
            </div>
        )
    }
}

export default Notification;
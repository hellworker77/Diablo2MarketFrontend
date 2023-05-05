import {NotificationProps} from "../../types/props/NotificationProps";
import notificationModule from '../../styles/Notification.module.css'
import NotifyContainer from "./Notify/NotifyContainer";

const Notification = (props: NotificationProps) => {
    return (
        <div className={notificationModule.wrapper}>
            {props.notifies.map(notify => <NotifyContainer key = {notify.id}
                                                           status={notify.status}
                                                           message={notify.message}
                                                           id={notify.id}/>)}
        </div>
    )
}

export default Notification;
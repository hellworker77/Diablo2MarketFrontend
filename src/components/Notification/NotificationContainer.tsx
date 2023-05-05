import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {NotificationPropsState} from "../../types/props/NotificationProps";
import Notification from "./Notification";

let mapStateToProps = (state: AppStateType): NotificationPropsState => {
    return {
        notifies: state.notificationReducer.notifications
    }
}


let NotificationContainer = connect(mapStateToProps, null)(Notification);

export default NotificationContainer;
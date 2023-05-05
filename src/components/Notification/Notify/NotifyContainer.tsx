import {NotifyPropsDispatch} from "../../../types/props/NotificationProps";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {GlobalNotificationActionType} from "../../../types/reducerTypes/actionTypes/GlobalNotificationActionType";
import Notify from "./Notify";
import {deleteByIdActionCreate} from "../../../redux/notificationReducer";


let mapDispatchToProps = (dispatch: Dispatch<GlobalNotificationActionType>): NotifyPropsDispatch => {
    return {
        deleteById: (id: string) => {
            dispatch(deleteByIdActionCreate(id))
        }
    }
}


let NotifyContainer = connect(null, mapDispatchToProps)(Notify);

export default NotifyContainer;
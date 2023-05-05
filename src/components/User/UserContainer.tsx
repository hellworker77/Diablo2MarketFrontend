import {AppStateType} from "../../redux/store";
import {UserPropsDispatch, UserPropsState} from "../../types/props/UserProps";
import {Dispatch} from "redux";
import {GlobalAccountActionType} from "../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {connect} from "react-redux";
import User from "./User";
import {ApplicationUserType} from "../../types/models/ApplicationUserType";
import {loadUserActionCreate} from "../../redux/accountReducer";
import {GlobalNotificationActionType} from "../../types/reducerTypes/actionTypes/GlobalNotificationActionType";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../redux/notificationReducer";


let mapStateToProps = (state: AppStateType) : UserPropsState => {
    return {
        selectedUserId: state.accountReducer.selectedUserId,
        loadedUser: state.accountReducer.loadedUser
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalAccountActionType | GlobalNotificationActionType>) : UserPropsDispatch => {
    return {
        loadUser: (user: ApplicationUserType) => {
            dispatch(loadUserActionCreate(user))
        },
        addNotify: (notify: NotifyPropsOwn) => {
            dispatch(addNotifyActionCreate(notify))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;


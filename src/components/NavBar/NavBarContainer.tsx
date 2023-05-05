import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import NavBar from "./NavBar";
import {NavBarPropsDispatch, NavBarPropsState} from "../../types/props/NavBarProps";
import {GlobalAccountActionType} from "../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {loadMeActionCreate} from "../../redux/accountReducer";
import {ApplicationUserType} from "../../types/models/ApplicationUserType";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../redux/notificationReducer";
import {GlobalNotificationActionType} from "../../types/reducerTypes/actionTypes/GlobalNotificationActionType";


let mapStateToProps = (state: AppStateType): NavBarPropsState => {
    return {
        token: state.accountReducer.token
    }
}
let mapDispatchToProps = (dispatch: Dispatch<GlobalAccountActionType | GlobalNotificationActionType>): NavBarPropsDispatch => {
    return {
        loadMe: (me: ApplicationUserType) => {
            dispatch(loadMeActionCreate(me))
        },
        addNotify: (notify: NotifyPropsOwn) => {
            dispatch(addNotifyActionCreate(notify))
        }
    }
}


let NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;
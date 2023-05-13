import {AppStateType} from "../../redux/store";
import {UserPropsDispatch, UserPropsState} from "../../types/props/UserProps";
import {Dispatch} from "redux";
import {GlobalAccountActionType} from "../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {connect} from "react-redux";
import User from "./User";
import {ApplicationUserType} from "../../types/models/ApplicationUserType";
import {loadUserActionCreate, loadUserDealsActionCreate, loadUserItemsActionCreate} from "../../redux/accountReducer";
import {GlobalNotificationActionType} from "../../types/reducerTypes/actionTypes/GlobalNotificationActionType";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../redux/notificationReducer";
import {DealType} from "../../types/models/DealType";
import {ItemType} from "../../types/models/ItemType";


let mapStateToProps = (state: AppStateType): UserPropsState => {
    return {
        selectedUserId: state.accountReducer.selectedUserId,
        user: state.accountReducer.loadedUserGrantInfo?.user ?? null,
        userDeals: state.accountReducer.loadedUserGrantInfo?.userDeals ?? null,
        userItems: state.accountReducer.loadedUserGrantInfo?.userItems ?? null
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalAccountActionType | GlobalNotificationActionType>): UserPropsDispatch => {
    return {
        loadUser: (user: ApplicationUserType) => {
            dispatch(loadUserActionCreate(user))
        },
        loadUserDeals: (deals: Array<DealType>) => {
            dispatch(loadUserDealsActionCreate(deals))
        },
        loadUserItems: (items: Array<ItemType>) => {
            dispatch(loadUserItemsActionCreate(items))
        },
        addNotify: (notify: NotifyPropsOwn) => {
            dispatch(addNotifyActionCreate(notify))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;


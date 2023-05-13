import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Profile from "./Profile";
import {ProfilePropsDispatch, ProfilePropsState} from "../../types/props/ProfileProps";
import {GlobalAccountActionType} from "../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {ApplicationUserType} from "../../types/models/ApplicationUserType";
import {
    loadMeActionCreate, loadMyDealsActionCreate, loadMyItemsActionCreate,
    loadUserActionCreate,
    loadUserDealsActionCreate,
    loadUserItemsActionCreate
} from "../../redux/accountReducer";
import {DealType} from "../../types/models/DealType";
import {ItemType} from "../../types/models/ItemType";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../redux/notificationReducer";
import {GlobalNotificationActionType} from "../../types/reducerTypes/actionTypes/GlobalNotificationActionType";

let mapStateToProps = (state: AppStateType): ProfilePropsState => {
    return {
        token: state.accountReducer.token,
        me: state.accountReducer.me?.user ?? null,
        myItems: state.accountReducer.me?.userItems ?? null,
        myDeals: state.accountReducer.me?.userDeals ?? null
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalAccountActionType | GlobalNotificationActionType>): ProfilePropsDispatch => {
    return {
        loadMe: (user: ApplicationUserType) => {
            dispatch(loadMeActionCreate(user))
        },
        loadMyDeals: (deals: Array<DealType>) => {
            dispatch(loadMyDealsActionCreate(deals))
        },
        loadMyItems: (items: Array<ItemType>) => {
            dispatch(loadMyItemsActionCreate(items))
        },
        addNotify: (notify: NotifyPropsOwn) => {
            dispatch(addNotifyActionCreate(notify))
        }
    }
}


let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
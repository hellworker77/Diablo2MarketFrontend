import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ItemButtons, ItemButtonsPropsDispatch, ItemButtonsPropsState} from "./ItemButtons";
import {Dispatch} from "redux";
import {GlobalNotificationActionType} from "../../types/reducerTypes/actionTypes/GlobalNotificationActionType";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../redux/notificationReducer";


let mapStateToProps = (state: AppStateType) : ItemButtonsPropsState => {
    return {
        item: state.tradingReducer.loadedItem,
        token: state.accountReducer.token,
        observerId: state.accountReducer.me?.user?.id ?? ""
    }
}
let mapDispatchToProps = (dispatch : Dispatch<GlobalNotificationActionType>) : ItemButtonsPropsDispatch => {
    return {
        addNotify: (notify: NotifyPropsOwn) =>{
            dispatch(addNotifyActionCreate(notify))
        }
    }
}

let ItemButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(ItemButtons);

export default ItemButtonsContainer;
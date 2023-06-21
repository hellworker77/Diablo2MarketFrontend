import Item from "./Item";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {GlobalTradingActionType} from "../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {Dispatch} from "redux";
import {ItemPropsDispatch, ItemPropsState} from "../../types/props/ItemProps";
import {ItemType} from "../../types/models/ItemType";
import {loadItemActionCreate} from "../../redux/tradingReducer";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../redux/notificationReducer";
import {GlobalNotificationActionType} from "../../types/reducerTypes/actionTypes/GlobalNotificationActionType";


let mapStateToProps = (state: AppStateType) : ItemPropsState => {
    return {
        token: state.accountReducer.token,
        itemId: state.tradingReducer.selectedItemId,
        loadedItem: state.tradingReducer.loadedItem
    }
}
let mapDispatchToProps = (dispatch : Dispatch<GlobalTradingActionType | GlobalNotificationActionType>) : ItemPropsDispatch => {
    return {
        loadItem:(item: ItemType) => {
            dispatch(loadItemActionCreate(item))
        },
        addNotify: (notify: NotifyPropsOwn) =>{
            dispatch(addNotifyActionCreate(notify))
        }
    }
}


let ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);

export default ItemContainer;
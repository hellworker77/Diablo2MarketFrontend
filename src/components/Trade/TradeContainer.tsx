import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {TradePropsDispatch, TradePropsState} from "../../types/props/TradeProps";
import Trade from "./Trade";
import {ItemType} from "../../types/models/ItemType";
import {loadItemsActionCreate} from "../../redux/tradingReducer";
import {GlobalTradingActionType} from "../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {GlobalNotificationActionType} from "../../types/reducerTypes/actionTypes/GlobalNotificationActionType";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../redux/notificationReducer";

let mapStateToProps = (state: AppStateType): TradePropsState => {
    return {
        items: state.tradingReducer.items,
        token: state.accountReducer.token
    }
}
let mapDispatchToProps = (dispatch: Dispatch<GlobalTradingActionType | GlobalNotificationActionType>): TradePropsDispatch => {
    return {
        loadItems: (items: Array<ItemType>) => {
            dispatch(loadItemsActionCreate(items))
        },
        addNotify: (notify: NotifyPropsOwn) => {
            dispatch(addNotifyActionCreate(notify))
        }
    }
}


let TradeContainer = connect(mapStateToProps, mapDispatchToProps)(Trade);

export default TradeContainer;
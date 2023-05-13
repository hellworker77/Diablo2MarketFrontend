import {Dispatch} from "redux";
import {connect} from "react-redux";
import {TradeItemPropsDispatch, TradeItemPropsState} from "../../../types/props/TradeItemProps";
import TradeItem from "./TradeItem";
import {AppStateType} from "../../../redux/store";
import {GlobalTradingActionType} from "../../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {selectItemActionCreate, selectItemShowModeActionCreate} from "../../../redux/tradingReducer";
import {ItemShowMode} from "../../../types/models/enums/ItemShowMode";
import {selectUserIdActionCreate} from "../../../redux/accountReducer";
import {GlobalAccountActionType} from "../../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {NotifyPropsOwn} from "../../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../../redux/notificationReducer";
import {GlobalNotificationActionType} from "../../../types/reducerTypes/actionTypes/GlobalNotificationActionType";

let mapStateToProps = (state: AppStateType): TradeItemPropsState => {
    return {
        token: state.accountReducer.token
    }
}
let mapDispatchToProps = (dispatch: Dispatch<GlobalTradingActionType | GlobalAccountActionType | GlobalNotificationActionType>): TradeItemPropsDispatch => {
    return {
        selectItemId: (id: string) => {
            dispatch(selectItemActionCreate(id))
        },
        changeItemShowMode: (mode: ItemShowMode) => {
            dispatch(selectItemShowModeActionCreate(mode))
        },
        selectUserId: (id: string) => {
            dispatch(selectUserIdActionCreate(id))
        },
        addNotify: (notify: NotifyPropsOwn) => {
            dispatch(addNotifyActionCreate(notify))
        }
    }
}


let TradeItemContainer = connect(mapStateToProps, mapDispatchToProps)(TradeItem);

export default TradeItemContainer;
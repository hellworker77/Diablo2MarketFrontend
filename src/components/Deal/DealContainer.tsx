import {DealPropsDispatch, DealPropsState} from "../../types/props/DealProps";
import {GlobalTradingActionType} from "../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "react";
import Deal from "./Deal";
import {connect} from "react-redux";
import {selectItemActionCreate, selectItemShowModeActionCreate} from "../../redux/tradingReducer";
import {ItemShowMode} from "../../types/models/enums/ItemShowMode";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../redux/notificationReducer";
import {GlobalNotificationActionType} from "../../types/reducerTypes/actionTypes/GlobalNotificationActionType";

let mapStateToProps = (state: AppStateType): DealPropsState => {
    return {
        token: state.accountReducer.token
    }
}
let mapDispatchToProps = (dispatch: Dispatch<GlobalTradingActionType | GlobalNotificationActionType>): DealPropsDispatch => {
    return {
        selectItemId: (id: string) => {
            dispatch(selectItemActionCreate(id))
        },
        changeItemShowMode: (mode: ItemShowMode) => {
            dispatch(selectItemShowModeActionCreate(mode))
        },
        addNotify: (notify: NotifyPropsOwn) => {
            dispatch(addNotifyActionCreate(notify))
        }
    }
}


let DealContainer = connect(mapStateToProps, mapDispatchToProps)(Deal);

export default DealContainer;
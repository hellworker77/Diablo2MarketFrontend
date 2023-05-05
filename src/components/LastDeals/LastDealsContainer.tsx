import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {GlobalTradingActionType} from "../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {GlobalNotificationActionType} from "../../types/reducerTypes/actionTypes/GlobalNotificationActionType";
import {DealType} from "../../types/models/DealType";
import {loadLastDealsActionCreate} from "../../redux/tradingReducer";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {addNotifyActionCreate} from "../../redux/notificationReducer";
import {LastDealsPropsDispatch, LastDealsPropsState} from "../../types/props/LastDealsProps";
import {connect} from "react-redux";
import LastDeals from "./LastDeals";

let mapStateToProps = (state: AppStateType): LastDealsPropsState => {
    return {
        lastDeals: state.tradingReducer.deals
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalTradingActionType | GlobalNotificationActionType>): LastDealsPropsDispatch => {
    return {
        loadLastDeals: (deals: Array<DealType>) => {
            dispatch(loadLastDealsActionCreate(deals))
        },
        addNotify: (notify: NotifyPropsOwn) => {
            dispatch(addNotifyActionCreate(notify))
        }
    }
}

let LastDealsContainer = connect(mapStateToProps, mapDispatchToProps)(LastDeals);

export default LastDealsContainer;
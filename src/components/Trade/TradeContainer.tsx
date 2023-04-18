import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {TradePropsDispatch, TradePropsState} from "../../types/props/TradeProps";
import Trade from "./Trade";
import {ItemType} from "../../types/models/ItemType";
import {loadItemsActionCreate} from "../../redux/tradingReducer";
import {GlobalTradingActionType} from "../../types/reducerTypes/actionTypes/GlobalTradingActionType";

let mapStateToProps = (state: AppStateType): TradePropsState => {
    return {
        items: state.tradingReducer.items
    }
}
let mapDispatchToProps = (dispatch: Dispatch<GlobalTradingActionType>): TradePropsDispatch => {
    return {
        loadItems: (items: Array<ItemType>) => {
            dispatch(loadItemsActionCreate(items))
        }
    }
}


let TradeContainer = connect(mapStateToProps, mapDispatchToProps)(Trade);

export default TradeContainer;
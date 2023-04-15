import {Dispatch} from "redux";
import {connect} from "react-redux";
import {TradeItemPropsDispatch, TradeItemPropsState} from "../../../types/props/TradeItemProps";
import TradeItem from "./TradeItem";
import {AppStateType} from "../../../redux/store";
import {GlobalTradingActionType} from "../../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {selectItemActionCreate} from "../../../redux/tradingReducer";

let mapStateToProps = (state: AppStateType): TradeItemPropsState => {
    return {
        isAuthorized: state.accountReducer.isAuthorized
    }
}
let mapDispatchToProps = (dispatch: Dispatch<GlobalTradingActionType>): TradeItemPropsDispatch => {
    return {
        selectItemId: (id: string) => {
            dispatch(selectItemActionCreate(id))
        }
    }
}


let TradeItemContainer = connect(mapStateToProps, mapDispatchToProps)(TradeItem);

export default TradeItemContainer;
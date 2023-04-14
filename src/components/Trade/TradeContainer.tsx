import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {TradePropsDispatch, TradePropsState} from "../../types/props/TradeProps";
import Trade from "./Trade";

let mapStateToProps = (state: AppStateType): TradePropsState => {
    return {
        items: state.tradingReducer.items
    }
}
let mapDispatchToProps = (dispatch: Dispatch<any>): TradePropsDispatch => {
    return {
    }
}


let TradeContainer = connect(mapStateToProps, mapDispatchToProps)(Trade);

export default TradeContainer;
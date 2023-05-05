import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";
import {GlobalTradingActionType} from "../../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {ItemAttributeDispatch, ItemAttributeState} from "../../../types/props/ItemAttributeProps";
import {connect} from "react-redux";
import ItemAttribute from "./ItemAttribute";

let mapStateToProps = (state: AppStateType) : ItemAttributeState => {
    return {
        mode: state.tradingReducer.itemShowMode
    }
}
let mapDispatchToProps = (dispatch : Dispatch<GlobalTradingActionType>) : ItemAttributeDispatch => {
    return {
    }
}

let ItemAttributeContainer = connect(mapStateToProps, mapDispatchToProps)(ItemAttribute);

export default ItemAttributeContainer;
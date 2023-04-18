import DetailItem from "./DetailItem";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {GlobalTradingActionType} from "../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {Dispatch} from "redux";
import {DetailItemPropsDispatch, DetailItemPropsState} from "../../types/props/DetailItemProps";
import {ItemType} from "../../types/models/ItemType";
import {loadItemActionCreate} from "../../redux/tradingReducer";


let mapStateToProps = (state: AppStateType) : DetailItemPropsState => {
    return {
        itemId: state.tradingReducer.selectedItemId,
        mode: state.tradingReducer.itemShowMode,
        loadedItem: state.tradingReducer.loadedItem
    }
}
let mapDispatchToProps = (dispatch : Dispatch<GlobalTradingActionType>) : DetailItemPropsDispatch => {
    return {
        loadItem:(item: ItemType) => {
            dispatch(loadItemActionCreate(item))
        }
    }
}


let DetailItemContainer = connect(mapStateToProps, mapDispatchToProps)(DetailItem);

export default DetailItemContainer;
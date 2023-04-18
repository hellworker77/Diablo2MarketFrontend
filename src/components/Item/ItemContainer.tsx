import Item from "./Item";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {GlobalTradingActionType} from "../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {Dispatch} from "redux";
import {ItemPropsDispatch, ItemPropsState} from "../../types/props/ItemProps";
import {ItemType} from "../../types/models/ItemType";
import {loadItemActionCreate} from "../../redux/tradingReducer";


let mapStateToProps = (state: AppStateType) : ItemPropsState => {
    return {
        itemId: state.tradingReducer.selectedItemId,
        mode: state.tradingReducer.itemShowMode,
        loadedItem: state.tradingReducer.loadedItem
    }
}
let mapDispatchToProps = (dispatch : Dispatch<GlobalTradingActionType>) : ItemPropsDispatch => {
    return {
        loadItem:(item: ItemType) => {
            dispatch(loadItemActionCreate(item))
        }
    }
}


let ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);

export default ItemContainer;
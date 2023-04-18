import {DealPanelPropsDispatch, DealPanelPropsState} from "../../types/props/DealPanelProps";
import {GlobalTradingActionType} from "../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "react";
import DealPanel from "./DealPanel";
import {connect} from "react-redux";
import {selectItemActionCreate, selectItemShowModeActionCreate} from "../../redux/tradingReducer";
import {ItemShowMode} from "../../types/models/enums/ItemShowMode";

let mapStateToProps = (state: AppStateType): DealPanelPropsState => {
    return {
        isAuthorized: state.accountReducer.isAuthorized
    }
}
let mapDispatchToProps = (dispatch: Dispatch<GlobalTradingActionType>): DealPanelPropsDispatch => {
    return {
        selectItemId: (id: string) => {
            dispatch(selectItemActionCreate(id))
        },
        changeItemShowMode: (mode: ItemShowMode) => {
            dispatch(selectItemShowModeActionCreate(mode))
        }
    }
}


let DealPanelContainer = connect(mapStateToProps, mapDispatchToProps)(DealPanel);

export default DealPanelContainer;
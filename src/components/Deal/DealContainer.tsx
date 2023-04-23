import {DealPropsDispatch, DealPropsState} from "../../types/props/DealProps";
import {GlobalTradingActionType} from "../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "react";
import Deal from "./Deal";
import {connect} from "react-redux";
import {selectItemActionCreate, selectItemShowModeActionCreate} from "../../redux/tradingReducer";
import {ItemShowMode} from "../../types/models/enums/ItemShowMode";

let mapStateToProps = (state: AppStateType): DealPropsState => {
    return {
    }
}
let mapDispatchToProps = (dispatch: Dispatch<GlobalTradingActionType>): DealPropsDispatch => {
    return {
        selectItemId: (id: string) => {
            dispatch(selectItemActionCreate(id))
        },
        changeItemShowMode: (mode: ItemShowMode) => {
            dispatch(selectItemShowModeActionCreate(mode))
        }
    }
}


let DealContainer = connect(mapStateToProps, mapDispatchToProps)(Deal);

export default DealContainer;
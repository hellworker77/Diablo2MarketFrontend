import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {GlobalTradingActionType} from "../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {RightSideBarPropsDispatch, RightSideBarPropsState} from "../../types/props/RightSideBarProps";
import {DealType} from "../../types/models/DealType";
import {loadLast24HoursDealsActionCreate} from "../../redux/tradingReducer";
import {connect} from "react-redux";
import RightSideBar from "./RightSideBar";


let mapStateToProps = (state: AppStateType): RightSideBarPropsState => {
    return {
       last24Deals: state.tradingReducer.last24deals
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalTradingActionType>): RightSideBarPropsDispatch => {
    return {
        loadLast24Deals: (deals: Array<DealType>) =>{
            dispatch(loadLast24HoursDealsActionCreate(deals))
        }
    }
}


let RightSideBarContainer = connect(mapStateToProps, mapDispatchToProps)(RightSideBar);

export default RightSideBarContainer;
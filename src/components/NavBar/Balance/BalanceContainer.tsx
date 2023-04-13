import {BalancePropsDispatch, BalancePropsState} from "../../../types/props/BalanceProps";
import {GlobalAccountActionType} from "../../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {addBalanceActionCreate} from "../../../redux/accountReducer";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Balance from "./Balance";


let mapStateToProps = (state: AppStateType) : BalancePropsState => {
    return {
        me: state.accountReducer.me
    }
}
let mapDispatchToProps = (dispatch : Dispatch<GlobalAccountActionType>) : BalancePropsDispatch => {
    return {
        addBalance:(increment: number) => {
            dispatch(addBalanceActionCreate(increment))
        }
    }
}


let BalancerContainer = connect(mapStateToProps, mapDispatchToProps)(Balance);

export default BalancerContainer;
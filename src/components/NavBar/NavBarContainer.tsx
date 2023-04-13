import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import NavBar from "./NavBar";
import {NavBarPropsDispatch, NavBarPropsState} from "../../types/props/NavBarProps";
import {GlobalNavActionType} from "../../types/reducerTypes/actionTypes/GlobalNavActionType";




let mapStateToProps = (state: AppStateType) : NavBarPropsState => {
    return {
        isAuthorized: state.accountReducer.isAuthorized
    }
}
let mapDispatchToProps = (dispatch : Dispatch<GlobalNavActionType>) : NavBarPropsDispatch => {
    return {
    }
}


let NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;
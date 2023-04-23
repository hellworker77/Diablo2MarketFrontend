import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import NavBar from "./NavBar";
import {NavBarPropsDispatch, NavBarPropsState} from "../../types/props/NavBarProps";
import {GlobalNavActionType} from "../../types/reducerTypes/actionTypes/GlobalNavActionType";
import {GlobalAccountActionType} from "../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {loadMeActionCreate, updateNameActionCreate} from "../../redux/accountReducer";
import {ApplicationUserType} from "../../types/models/ApplicationUserType";


let mapStateToProps = (state: AppStateType): NavBarPropsState => {
    return {
        token: state.accountReducer.token
    }
}
let mapDispatchToProps = (dispatch: Dispatch<GlobalNavActionType | GlobalAccountActionType>): NavBarPropsDispatch => {
    return {
        loadMe: (me: ApplicationUserType) => {
            dispatch(loadMeActionCreate(me))
        }
    }
}


let NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;
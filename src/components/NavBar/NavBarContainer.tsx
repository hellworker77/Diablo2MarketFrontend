import {connect} from "react-redux";

import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import NavBar from "./NavBar";
import {NavBarPropsDispatch, NavBarPropsState} from "../../types/props/NavBarProps";
import {GlobalNavActionType} from "../../types/reducerTypes/actionTypes/GlobalNavActionType";
import {switchLanguageActionCreate} from "../../redux/navReducer";




let mapStateToProps = (state: AppStateType) : NavBarPropsState => {
    return {
        selectedLanguage: state.navReducer.selectedLanguage,
        languages: state.navReducer.languages,
        isAuthorized: state.accountReducer.isAuthorized
    }
}
let mapDispatchToProps = (dispatch : Dispatch<GlobalNavActionType>) : NavBarPropsDispatch => {
    return {
        switchLanguage:(code: string) => {
            dispatch(switchLanguageActionCreate(code))
        }
    }
}


let NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;
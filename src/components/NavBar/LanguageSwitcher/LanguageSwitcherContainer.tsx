import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";
import {GlobalNavActionType} from "../../../types/reducerTypes/actionTypes/GlobalNavActionType";
import {switchLanguageActionCreate} from "../../../redux/navReducer";
import {connect} from "react-redux";
import {LanguageSwitcherPropsDispatch, LanguageSwitcherPropsState} from "../../../types/props/LanguageSwitcherProps";
import LanguageSwitcher from "./LanguageSwitcher";

let mapStateToProps = (state: AppStateType) : LanguageSwitcherPropsState => {
    return {
        selectedLanguage: state.navReducer.selectedLanguage,
        languages: state.navReducer.languages,
    }
}
let mapDispatchToProps = (dispatch : Dispatch<GlobalNavActionType>) : LanguageSwitcherPropsDispatch => {
    return {
        switchLanguage:(code: string) => {
            dispatch(switchLanguageActionCreate(code))
        }
    }
}


let LanguageSwitcherContainer = connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);

export default LanguageSwitcherContainer;
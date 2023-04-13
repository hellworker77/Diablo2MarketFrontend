import {NavStateType} from "../types/reducerTypes/stateTypes/NavStateType";
import {GlobalNavActionType} from "../types/reducerTypes/actionTypes/GlobalNavActionType";
import {
    SWITCH_LANGUAGE_ACTION_TYPE,
    SwitchLanguageActionType
} from "../types/reducerTypes/actionTypes/NavBar/SwitchLanguageActionType";


let initialState: NavStateType = {
    languages: [
        {
            code: "RU",
            name: "Русский"
        },
        {
            code: "EN",
            name: "English"
        }
    ],
    selectedLanguage: {
        code: "EN",
        name: "English"
    }
}

const NavReducer = (state = initialState, action: GlobalNavActionType): NavStateType => {
    switch (action.type) {
        case SWITCH_LANGUAGE_ACTION_TYPE:
            let language = state.languages.find(x=>x.code === action.code);
            if(language === undefined){
                return {
                    ...state
                }
            }
            return {
                ...state,
                selectedLanguage: language
            }
        default:
            return {
                ...state
            }
    }
}

export const switchLanguageActionCreate = (code: string) : SwitchLanguageActionType => ({
    type: SWITCH_LANGUAGE_ACTION_TYPE, code: code
})

export default NavReducer;
import {LanguageType} from "../models/LanguageType";

export type NavBarProps = NavBarPropsState & NavBarPropsDispatch


export type NavBarPropsState = {
    selectedLanguage: LanguageType,
    languages: Array<LanguageType>,
    isAuthorized: boolean
}

export type NavBarPropsDispatch = {
    switchLanguage: (code: string) => void
}


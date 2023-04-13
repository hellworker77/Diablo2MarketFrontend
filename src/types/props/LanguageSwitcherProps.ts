import {LanguageType} from "../models/LanguageType";

export type LanguageSwitcherProps = LanguageSwitcherPropsState & LanguageSwitcherPropsDispatch


export type LanguageSwitcherPropsState = {
    selectedLanguage: LanguageType,
    languages: Array<LanguageType>,
}

export type LanguageSwitcherPropsDispatch = {
    switchLanguage: (code: string) => void
}


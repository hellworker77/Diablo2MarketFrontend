import {LanguageType} from "../../models/LanguageType";

export type NavStateType = {
    languages: Array<LanguageType>
    selectedLanguage: LanguageType
}
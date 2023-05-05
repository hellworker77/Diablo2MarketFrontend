import React from "react";
import {LanguageSwitcherProps} from "../../../types/props/LanguageSwitcherProps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import languageSwitcherModule from "../../../styles/NavBar/LanguageSwitcher.module.css";

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
    return (
        <div className={languageSwitcherModule.container}>
            <div>{props.selectedLanguage.code}</div>
            <button className={languageSwitcherModule.expand}>
                <FontAwesomeIcon style={{display: "block"}}
                                 icon={faCaretDown}/>
            </button>
            <div className={languageSwitcherModule.languages_panel}>
                {
                    props.languages.map(language =>
                        <div key={language.code}
                             className={languageSwitcherModule.language}
                             onClick={()=>props.switchLanguage(language.code)}>
                            {language.name}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default LanguageSwitcher;
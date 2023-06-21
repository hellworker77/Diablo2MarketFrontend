import userModule from "../../../styles/User/User.module.css";
import uiModule from "../../../styles/Ui.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export type HeaderProps = {
    userName: string
    balance?: number
}


export const Header = (props: HeaderProps) => {
    return(
        <div className={`${userModule.frame_top} ${uiModule.frame_brown}`}>
            <div className={userModule.frame_content}
                 style={{flexDirection: "row"}}>
                <div className={`${uiModule.header} ${uiModule.row_content_container}`}>
                    {props.userName}
                </div>
                {props.balance? <div className={`${uiModule.header} ${uiModule.row_content_container}`}
                                      style={{margin: '0 0 0 auto'}}>
                    {props.balance}
                    <FontAwesomeIcon icon={faSackDollar}
                                     style={{marginLeft: "10px"}}/>
                </div> : ""}
            </div>
        </div>
    )
}
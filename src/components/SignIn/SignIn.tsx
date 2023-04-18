import React from "react"
import {SignInProps} from "../../types/props/SignInProps";
import uiModule from "../../styles/Ui.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey} from "@fortawesome/free-solid-svg-icons";

class SignIn extends React.Component<SignInProps> {
    render() {
        return (
            <div style={{display: "flex"}}>
                <div className={uiModule.frame_gray}
                     style={{padding: "15px"}}>
                    <div style={{display: "grid", gridAutoFlow: "row", gap: "10px"}}>
                        <div className={`${uiModule.header} ${uiModule.row_content_container}`}
                             style={{borderBottom: "1px solid black"}}>
                            <FontAwesomeIcon icon={faKey}/>Log In
                        </div>
                        <input type={"text"}
                               placeholder={"Username"}
                               className={uiModule.input}
                               value={this.props.name}/>
                        <input type={"password"}
                               placeholder={"Password"}
                               className={uiModule.input}
                               value={this.props.password}/>
                        <div>Log in</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;
import React from "react";
import uiModule from "../../styles/Ui.module.css"
import {SignUpProps} from "../../types/props/SignUpProps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFeather} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const SignUp = (props: SignUpProps) => {
    let nameRef = React.createRef<HTMLInputElement>();
    let emailRef = React.createRef<HTMLInputElement>();
    let passwordRef = React.createRef<HTMLInputElement>();
    let verifyPasswordRef = React.createRef<HTMLInputElement>();
    return (
        <div style={{display: "flex", marginTop: "15vh"}}>
            <div className={uiModule.frame_brown}
                 style={{padding: "20px", margin: "auto"}}>
                <div style={{display: "grid", gridAutoFlow: "row", gap: "20px"}}>
                    <div className={`${uiModule.header} ${uiModule.row_content_container}`}
                         style={{borderBottom: "1px solid black", paddingBottom: "10px"}}>
                        <FontAwesomeIcon icon={faFeather}/>Register
                    </div>
                    <input type={"text"}
                           placeholder={"Username"}
                           className={uiModule.input}
                           value={props.name}
                           ref={nameRef}
                           onChange={() => {
                               props.updateName(nameRef.current?.value ?? "")
                           }}/>
                    <input type={"text"}
                           placeholder={"Email"}
                           className={uiModule.input}
                           value={props.email}
                           ref={emailRef}
                           onChange={() => {
                               props.updateEmail(emailRef.current?.value ?? "")
                           }}/>
                    <input type={"password"}
                           placeholder={"Password"}
                           className={uiModule.input}
                           value={props.password}
                           ref={passwordRef}
                           onChange={() => {
                               props.updatePassword(passwordRef.current?.value ?? "")
                           }}/>
                    <input type={"password"}
                           placeholder={"Confirm Password"}
                           className={uiModule.input}
                           value={props.verifyPassword}
                           ref={verifyPasswordRef}
                           onChange={() => {
                               props.updateVerifyPassword(verifyPasswordRef.current?.value ?? "")
                           }}/>
                    <div style={{display: "flex"}}>
                        <div className={uiModule.button}
                             style={{margin: "auto auto auto 0"}}>
                            <div className={uiModule.gray}>
                                <div style={{margin: "auto 5px"}}>
                                    Register
                                </div>
                            </div>
                        </div>
                        <div className={uiModule.button} style={{margin: "auto 0 auto auto"}}>
                            <div className={uiModule.green}>
                                <div style={{margin: "auto 5px"}}>
                                    <Link to={"/login"}
                                          style={{textDecoration: "none"}}>
                                        I have an account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
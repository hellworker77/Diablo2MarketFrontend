import React from "react";
import uiModule from "../../styles/Ui.module.css"
import {SignUpProps} from "../../types/props/SignUpProps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFeather} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export class SignUp extends React.Component<SignUpProps>{
    private readonly _nameRef;
    private readonly _emailRef;
    private readonly _passwordRef;
    private readonly _verifyPasswordRef;
    constructor(props: SignUpProps) {
        super(props);
        this._nameRef = React.createRef<HTMLInputElement>()
        this._emailRef = React.createRef<HTMLInputElement>()
        this._passwordRef = React.createRef<HTMLInputElement>();
        this._verifyPasswordRef = React.createRef<HTMLInputElement>();
    }
    render(){
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
                               value={this.props.name}
                               ref={this._nameRef}
                               onChange={() => {
                                   this.props.updateName(this._nameRef.current?.value ?? "")
                               }}/>
                        <input type={"text"}
                               placeholder={"Email"}
                               className={uiModule.input}
                               value={this.props.email}
                               ref={this._emailRef}
                               onChange={() => {
                                   this.props.updateEmail(this._emailRef.current?.value ?? "")
                               }}/>
                        <input type={"password"}
                               placeholder={"Password"}
                               className={uiModule.input}
                               value={this.props.password}
                               ref={this._passwordRef}
                               onChange={() => {
                                   this.props.updatePassword(this._passwordRef.current?.value ?? "")
                               }}/>
                        <input type={"password"}
                               placeholder={"Confirm Password"}
                               className={uiModule.input}
                               value={this.props.verifyPassword}
                               ref={this._verifyPasswordRef}
                               onChange={() => {
                                   this.props.updateVerifyPassword(this._verifyPasswordRef.current?.value ?? "")
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
}

export default SignUp;
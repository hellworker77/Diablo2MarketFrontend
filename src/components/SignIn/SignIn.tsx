import React from "react"
import {SignInProps} from "../../types/props/SignInProps";
import uiModule from "../../styles/Ui.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {SignInRequestManager} from "../../utilities/RequestHandlerFactory/Account/SignInRequestManager";
import {TokenManager} from "../../utilities/TokenManager";
import Notification, {NotificationProps, NotificationStatus} from "../Notification/Notification";
import {ErrorHandler} from "../../utilities/ErrorHandlerFactory/ErrorHandler";

class SignIn extends React.Component<SignInProps, NotificationProps> {
    private readonly _nameRef;
    private readonly _passwordRef;

    constructor(props: SignInProps) {
        super(props);
        this._nameRef = React.createRef<HTMLInputElement>()
        this._passwordRef = React.createRef<HTMLInputElement>();
        this.state = {status: NotificationStatus.None, isVisible: false, message: ""}
    }
    private async _authorize() {
        let requestManager = new SignInRequestManager()
        requestManager.createBody({password: this.props.password, username: this.props.name}, "account");

        let accountToken = await requestManager.execute()
            .then(response => {return response.data})
            .catch(error => {
                this.setState(ErrorHandler.getInstance().execute(error, this.constructor.name))
            });

        if(accountToken !== undefined){
            TokenManager.save(accountToken)
            this.props.loadAccountToken(accountToken);
        }
    }
    render() {
        return (
            <div style={{display: "flex", marginTop: "15vh"}}>
                <div className={uiModule.frame_brown}
                     style={{padding: "20px", margin: "auto"}}>
                    <div style={{display: "grid", gridAutoFlow: "row", gap: "20px"}}>
                        <div className={`${uiModule.header} ${uiModule.row_content_container}`}
                             style={{borderBottom: "1px solid black", paddingBottom: "10px"}}>
                            <FontAwesomeIcon icon={faKey}/>Log In
                        </div>
                        <input type={"text"}
                               placeholder={"Username"}
                               className={uiModule.input}
                               value={this.props.name}
                               ref={this._nameRef}
                               onChange={() => {
                                   this.props.updateName(this._nameRef.current?.value ?? "")
                               }}/>
                        <input type={"password"}
                               placeholder={"Password"}
                               className={uiModule.input}
                               value={this.props.password}
                               ref={this._passwordRef}
                               onChange={() => {
                                   this.props.updatePassword(this._passwordRef.current?.value ?? "")
                               }}/>
                        <Notification status={this.state.status} isVisible={this.state.isVisible} message={this.state.message}/>
                        <div style={{display: "flex"}}>
                            <div className={uiModule.button}
                                 style={{margin: "auto auto auto 0"}}>
                                <div className={uiModule.gray}>
                                    <div style={{margin: "auto 5px"}} onClick={() => this._authorize()}>
                                        Log in
                                    </div>
                                </div>
                            </div>
                            <div className={uiModule.button} style={{margin: "auto 0 auto auto"}}>
                                <div className={uiModule.green}>
                                    <div style={{margin: "auto 5px"}}>
                                        <Link to={"/register"}
                                              style={{textDecoration: "none"}}>
                                            Create an account
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

export default SignIn;
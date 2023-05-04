import React, {useState} from "react"
import {SignInProps} from "../../types/props/SignInProps";
import uiModule from "../../styles/Ui.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import CustomNotification, {NotificationProps} from "../Notification/CustomNotification";
import {SignInRequestManager} from "../../utilities/RequestHandlerFactory/Account/SignInRequestManager";
import {fetchData} from "../../utilities/FetchData";
import {Token, TokenManager} from "../../utilities/TokenManager";

const SignIn = (props: SignInProps) => {
    let nameRef = React.createRef<HTMLInputElement>();
    let passwordRef = React.createRef<HTMLInputElement>();

    const [notification, setNotification] = useState<NotificationProps>();

    const navigate = useNavigate();

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
                           value={props.name}
                           ref={nameRef}
                           onChange={() => {
                               props.updateName(nameRef.current?.value ?? "")
                           }}/>
                    <input type={"password"}
                           placeholder={"Password"}
                           className={uiModule.input}
                           value={props.password}
                           ref={passwordRef}
                           onChange={() => {
                               props.updatePassword(passwordRef.current?.value ?? "")
                           }}/>
                    {
                        notification ? <CustomNotification status={notification.status}
                                                           isVisible={notification.isVisible}
                                                           message={notification.message}/> : ""
                    }
                    <div style={{display: "flex"}}>
                        <div className={uiModule.button}
                             style={{margin: "auto auto auto 0"}}>
                            <div className={uiModule.gray}>
                                <div style={{margin: "auto 5px"}} onClick={() => {
                                    let requestManager = new SignInRequestManager()
                                    requestManager.createBody({
                                        password: props.password,
                                        username: props.name
                                    }, "account");

                                    let response = requestManager.getResponse()

                                    fetchData<Token>(response, setNotification, typeof SignIn)
                                        .then(token => {
                                            if (token !== undefined) {
                                                TokenManager.save(token)
                                                props.loadAccountToken(token)
                                                navigate("/trade")
                                            }
                                        })
                                }}>
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


export default SignIn;
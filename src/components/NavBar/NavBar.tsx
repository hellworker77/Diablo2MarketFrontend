import React from "react";
import {NavBarProps} from "../../types/props/NavBarProps";
import navBarModule from '../../styles/NavBar/NavBar.module.css'
import {NavLink} from "react-router-dom";
import BalancerContainer from "./Balance/BalanceContainer";
import LanguageSwitcherContainer from "./LanguageSwitcher/LanguageSwitcherContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignIn, faSignOut} from "@fortawesome/free-solid-svg-icons";
import lastDealsIcon from "../../images/icons/lightradius.png"
import tradeIcon from "../../images/icons/diadem_ticon.png"
import profileIcon from "../../images/icons/chgact.png"
import {GetMeRequestManager} from "../../utilities/RequestHandlerFactory/Account/GetMeRequestManager";

class NavBar extends React.Component<NavBarProps> {
    async componentDidUpdate(prevProps: Readonly<NavBarProps>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.token === null && this.props.token !== null){
            let requestManager = new GetMeRequestManager(this.props.token);

            let me = await requestManager.execute();
            this.props.loadMe(me);
        }
    }

    render() {
        return (
            <div className={navBarModule.container}>
                <div className={navBarModule.content}>
                    {this.props.token?
                        <NavLink className={navBarModule.button}
                                 to={"/profile"}>
                            <img alt={"icon"} src={profileIcon}></img>
                            Profile
                        </NavLink>:<div></div>}
                    <NavLink
                        to={"/trade"}
                        className={navBarModule.button}>
                        <img alt={"icon"} src={tradeIcon}></img>
                        Trade
                    </NavLink>
                    <NavLink to={"/history"}
                             className={navBarModule.button}>
                        <img alt={"icon"} src={lastDealsIcon}></img>
                        Last Deals
                    </NavLink>
                    <div></div>
                    {this.props.token?<BalancerContainer />:<div></div>}
                    {this.props.token?<NavLink to={"/logout"}
                                                      className={navBarModule.button}>
                        <FontAwesomeIcon icon={faSignOut}/>
                    </NavLink>:<div></div>}
                    {this.props.token?<div></div>:
                        <NavLink
                        to={"/login"}
                        className={navBarModule.button}>
                            <FontAwesomeIcon icon={faSignIn}/>
                        </NavLink>}
                    <div className={navBarModule.button}>
                        <LanguageSwitcherContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;
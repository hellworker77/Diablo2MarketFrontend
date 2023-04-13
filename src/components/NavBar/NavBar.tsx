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

class NavBar extends React.Component<NavBarProps> {
    render() {
        return (
            <div className={navBarModule.container}>
                <div className={navBarModule.content}>
                    {this.props.isAuthorized?
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
                    {this.props.isAuthorized?<BalancerContainer />:<div></div>}
                    {this.props.isAuthorized?<NavLink to={"/logout"}
                                                      className={navBarModule.button}>
                        <FontAwesomeIcon icon={faSignOut}/>
                    </NavLink>:<div></div>}
                    {this.props.isAuthorized?<div></div>:
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
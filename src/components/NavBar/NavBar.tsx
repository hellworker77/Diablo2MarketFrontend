import React from "react";
import {NavBarProps} from "../../types/props/NavBarProps";
import navBarModule from '../../styles/NavBar/NavBar.module.css'
import {NavLink} from "react-router-dom";
import BalancerContainer from "./Balance/BalanceContainer";

class NavBar extends React.Component<NavBarProps> {
    componentDidMount() {
        this.props.switchLanguage("RU")
    }

    render() {
        return (
            <div className={navBarModule.container}>
                <div className={navBarModule.content}>
                    {this.props.isAuthorized?<NavLink className={navBarModule.button} to={"/profile"}>Profile</NavLink>:<div></div>}
                    <NavLink to={"/trade"} className={navBarModule.button}>Trade</NavLink>
                    <NavLink to={"/history"} className={navBarModule.button}>Last Deals</NavLink>
                    <div></div>
                    {this.props.isAuthorized?<BalancerContainer />:<div></div>}
                    {this.props.isAuthorized?<NavLink to={"/logout"} className={navBarModule.button}>logout</NavLink>:<div></div>}
                    {this.props.isAuthorized?<div></div>:<NavLink to={"/login"} className={navBarModule.button}>login</NavLink>}
                    <div className={navBarModule.button}>LanguageSwitcher</div>
                </div>
            </div>
        )
    }
}

export default NavBar;
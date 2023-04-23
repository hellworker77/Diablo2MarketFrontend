import React from 'react';
import {BalanceProps} from "../../../types/props/BalanceProps";
import navBarModule from '../../../styles/NavBar/NavBar.module.css'
import uiModule from '../../../styles/Ui.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

class Balance extends React.Component<BalanceProps> {
    render() {
        return (
            <div className={navBarModule.button}>
                <div className={uiModule.button}>
                    <div className={uiModule.green} >
                        <div style={{margin:"auto auto auto 5px"}}>
                            {this.props.me?.balance}
                        </div>
                        <div style={{margin:"auto 5px auto auto"}}>
                            <NavLink to={"/payment"}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></NavLink>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default Balance;
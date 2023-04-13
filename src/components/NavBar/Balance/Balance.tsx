import React from 'react';
import {BalanceProps} from "../../../types/props/BalanceProps";
import navBarModule from '../../../styles/NavBar/NavBar.module.css'
import balanceModule from '../../../styles/NavBar/Balance.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

class Balance extends React.Component<BalanceProps> {
    render() {
        return (
            <div className={navBarModule.button}>
                <div className={balanceModule.cover}>
                    <div className={balanceModule.inner} >
                        <div>
                            {this.props.me?.balance}
                        </div>
                        <div>
                            <NavLink to={"/payment"}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></NavLink>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default Balance;
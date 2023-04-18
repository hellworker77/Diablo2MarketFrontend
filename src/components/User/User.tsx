import React from 'react'
import {ApplicationUserType} from "../../types/models/ApplicationUserType";
import {GetUserByIdRequestManager} from "../../utilities/RequestHandlerFactory/Account/GetUserByIdRequestManager";
import {UserProps} from "../../types/props/UserProps";
import uiModule from "../../styles/Ui.module.css"
import userModule from "../../styles/User/User.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";


class User extends React.Component<UserProps> {
    async componentDidMount() {
        let response: ApplicationUserType | void;
        let requestManager = new GetUserByIdRequestManager({userId: this.props.selectedUserId})
        response = await requestManager.execute();

        if (response !== undefined) {
            this.props.loadUser(response)
        }
    }

    render() {
        return (
            <div className={userModule.wrapper}>
                <div className={`${uiModule.frame_brown} ${userModule.container}`} style={{width: "100%", aspectRatio:"1/1"}}>
                    <div className={uiModule.preloader} style={{width: "100%", aspectRatio:"1/1"}}>

                    </div>
                </div>
                <div className={`${uiModule.frame_brown} ${userModule.container}`}
                     style={{margin:"0 auto auto 0", padding:"10px"}}>
                    <div className={`${uiModule.header} ${uiModule.row_content_container}`}>
                        <FontAwesomeIcon icon={faSackDollar}/> {this.props.loadedUser?.balance}
                    </div>
                </div>
            </div>
        )
    }
}

export default User;
import React from 'react'
import {ApplicationUserType} from "../../types/models/ApplicationUserType";
import {GetUserByIdRequestManager} from "../../utilities/RequestHandlerFactory/Account/GetUserByIdRequestManager";
import {UserProps} from "../../types/props/UserProps";
import uiModule from "../../styles/Ui.module.css"

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
            <div>
                {this.props.selectedUserId}
            </div>
        )
    }
}

export default User;
import React, {useEffect, useState} from 'react'
import {GetUserByIdRequestManager} from "../../utilities/RequestHandlerFactory/Account/GetUserByIdRequestManager";
import {UserProps} from "../../types/props/UserProps";
import uiModule from "../../styles/Ui.module.css"
import userModule from "../../styles/User/User.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";
import {fetchData, loadFetchedData} from "../../utilities/FetchData";
import {NotificationProps} from "../Notification/CustomNotification";


const User = (props: UserProps) => {
    const [notification, setNotification] = useState<NotificationProps>();
    useEffect(() => {
        let requestManager = new GetUserByIdRequestManager({userId: props.selectedUserId})

        let fetch = fetchData(requestManager.getResponse(), setNotification, typeof User)

        loadFetchedData(fetch, props.loadUser)
    }, [])

    return (
        <div className={userModule.wrapper}>
            <div className={`${uiModule.frame_brown} ${userModule.container}`}
                 style={{width: "100%", aspectRatio: "1/1"}}>
                <div className={uiModule.preloader} style={{width: "100%", aspectRatio: "1/1"}}>

                </div>
            </div>
            <div className={`${uiModule.frame_brown} ${userModule.container}`}
                 style={{margin: "0 auto auto 0", padding: "10px"}}>
                <div className={`${uiModule.header} ${uiModule.row_content_container}`}>
                    <FontAwesomeIcon icon={faSackDollar}/> {props.loadedUser?.balance}
                </div>
            </div>
        </div>
    )
}

export default User;
import React from "react"
import {ProfileProps} from "../../types/props/ProfileProps";


const Profile = (props: ProfileProps) => {
    return (
        <div>
            {props.me?.balance}
        </div>
    )
}

export default Profile;
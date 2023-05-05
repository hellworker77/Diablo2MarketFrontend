import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Profile from "./Profile";
import {ProfilePropsDispatch, ProfilePropsState} from "../../types/props/ProfileProps";
import {GlobalAccountActionType} from "../../types/reducerTypes/actionTypes/GlobalAccountActionType";

let mapStateToProps = (state: AppStateType): ProfilePropsState => {
    return {
        token: state.accountReducer.token,
        me: state.accountReducer.me

    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalAccountActionType>): ProfilePropsDispatch => {
    return {
    }
}


let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
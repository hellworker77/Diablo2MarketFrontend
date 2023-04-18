import {AppStateType} from "../../redux/store";
import {UserPropsDispatch, UserPropsState} from "../../types/props/UserProps";
import {Dispatch} from "redux";
import {GlobalAccountActionType} from "../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {connect} from "react-redux";
import User from "./User";
import {ApplicationUserType} from "../../types/models/ApplicationUserType";
import {loadUserActionCreate} from "../../redux/accountReducer";


let mapStateToProps = (state: AppStateType) : UserPropsState => {
    return {
        selectedUserId: state.accountReducer.selectedUserId,
        loadedUser: state.accountReducer.loadedUser
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalAccountActionType>) : UserPropsDispatch => {
    return {
        loadUser: (user: ApplicationUserType) => {
            dispatch(loadUserActionCreate(user))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;


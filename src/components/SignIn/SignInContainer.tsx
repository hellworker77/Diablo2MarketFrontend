import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import SignIn from "./SignIn";
import {SignInPropsDispatch, SignInPropsState} from "../../types/props/SignInProps";
import {GlobalAccountActionType} from "../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {updateEmailActionCreate, updateNameActionCreate, updatePasswordActionCreate} from "../../redux/accountReducer";

let mapStateToProps = (state: AppStateType): SignInPropsState => {
    return {
        name: state.accountReducer.name,
        email: state.accountReducer.email,
        password: state.accountReducer.password
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalAccountActionType>): SignInPropsDispatch => {
    return {
        updateName: (name: string) => {
            dispatch(updateNameActionCreate(name))
        },
        updateEmail: (email: string) => {
            dispatch(updateEmailActionCreate(email))
        },
        updatePassword: (password: string) => {
            dispatch(updatePasswordActionCreate(password))
        }
    }
}


let SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
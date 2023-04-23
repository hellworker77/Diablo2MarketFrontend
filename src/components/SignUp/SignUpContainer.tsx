import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {GlobalAccountActionType} from "../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import { updateEmailActionCreate,
    updateNameActionCreate,
    updatePasswordActionCreate, updateVerifyPasswordActionCreate
} from "../../redux/accountReducer";
import SignUp from "./SignUp";
import {SignUpPropsDispatch, SignUpPropsState} from "../../types/props/SignUpProps";

let mapStateToProps = (state: AppStateType): SignUpPropsState => {
    return {
        name: state.accountReducer.name,
        email: state.accountReducer.email,
        password: state.accountReducer.password,
        verifyPassword: state.accountReducer.verifyPassword
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalAccountActionType>): SignUpPropsDispatch => {
    return {
        updateName: (name: string) => {
            dispatch(updateNameActionCreate(name))
        },
        updateEmail: (email: string) => {
            dispatch(updateEmailActionCreate(email))
        },
        updatePassword: (password: string) => {
            dispatch(updatePasswordActionCreate(password))
        },
        updateVerifyPassword: (verifyPassword: string) => {
            dispatch(updateVerifyPasswordActionCreate(verifyPassword))
        }
    }
}


let SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;
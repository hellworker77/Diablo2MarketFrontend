import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import SignIn from "./SignIn";
import {SignInPropsDispatch, SignInPropsState} from "../../types/props/SignInProps";
import {GlobalAccountActionType} from "../../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {
    loadAccountTokenActionCreate,
    updateNameActionCreate,
    updatePasswordActionCreate
} from "../../redux/accountReducer";
import {Token} from "../../utilities/TokenManager";

let mapStateToProps = (state: AppStateType): SignInPropsState => {
    return {
        name: state.accountReducer.name,
        password: state.accountReducer.password
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalAccountActionType>): SignInPropsDispatch => {
    return {
        updateName: (name: string) => {
            dispatch(updateNameActionCreate(name))
        },
        updatePassword: (password: string) => {
            dispatch(updatePasswordActionCreate(password))
        },
        loadAccountToken: (token: Token) => {
            dispatch(loadAccountTokenActionCreate(token))
        }
    }
}


let SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
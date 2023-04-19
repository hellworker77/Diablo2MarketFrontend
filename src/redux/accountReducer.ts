import {AccountStateType} from "../types/reducerTypes/stateTypes/AccountStateType";
import {
    ADD_BALANCE_ACTION_TYPE,
    AddBalanceActionType
} from "../types/reducerTypes/actionTypes/Account/AddBalanceActionType";
import {GlobalAccountActionType} from "../types/reducerTypes/actionTypes/GlobalAccountActionType";
import {ApplicationUserType} from "../types/models/ApplicationUserType";
import {LOAD_USER_ACTION_TYPE, LoadUserActionType} from "../types/reducerTypes/actionTypes/Account/LoadUserActionType";
import {LOAD_ME_ACTION_TYPE, LoadMeActionType} from "../types/reducerTypes/actionTypes/Account/LoadMeActionType";
import {
    SELECT_USER_ID_ACTION_TYPE,
    SelectUserIdActionType
} from "../types/reducerTypes/actionTypes/Account/SelectUserIdActionType";
import {
    UPDATE_NAME_ACTION_TYPE,
    UpdateNameActionType
} from "../types/reducerTypes/actionTypes/Account/UpdateNameActionType";
import {
    UPDATE_EMAIL_ACTION_TYPE,
    UpdateEmailActionType
} from "../types/reducerTypes/actionTypes/Account/UpdateEmailActionType";
import {
    UPDATE_PASSWORD_ACTION_TYPE,
    UpdatePasswordActionType
} from "../types/reducerTypes/actionTypes/Account/UpdatePasswordActionType";

let initialState : AccountStateType = {
    isAuthorized: false,
    me: null,
    loadedUser: null,
    selectedUserId: "",
    name: "",
    email: "",
    password: ""
}

const AccountReducer = (state = initialState, action: GlobalAccountActionType) : AccountStateType => {
    switch (action.type){
        case LOAD_USER_ACTION_TYPE:
            return {
                ...state,
                loadedUser: {...action.user}
            }
        case LOAD_ME_ACTION_TYPE:
            return {
                ...state,
                me: {...action.me}
            }
        case SELECT_USER_ID_ACTION_TYPE:
            return {
                ...state,
                selectedUserId: action.id
            }
        case UPDATE_NAME_ACTION_TYPE:
            return {
                ...state,
                name: action.name
            }
        case UPDATE_EMAIL_ACTION_TYPE:
            return {
                ...state,
                email: action.email
            }
        case UPDATE_PASSWORD_ACTION_TYPE:
            return {
                ...state,
                password: action.password
            }
        default:
            return {
                ...state
            }
    }
}

export const updateNameActionCreate = (name: string): UpdateNameActionType => ({
    type: UPDATE_NAME_ACTION_TYPE, name: name
})

export const updateEmailActionCreate = (email: string): UpdateEmailActionType => ({
    type: UPDATE_EMAIL_ACTION_TYPE, email: email
})

export const updatePasswordActionCreate = (password: string): UpdatePasswordActionType => ({
    type: UPDATE_PASSWORD_ACTION_TYPE, password: password
})

export const selectUserIdActionCreate = (id: string) : SelectUserIdActionType => ({
    type: SELECT_USER_ID_ACTION_TYPE, id: id
})

export const loadMeActionCreate = (me: ApplicationUserType) : LoadMeActionType => ({
    type: LOAD_ME_ACTION_TYPE, me: me
})

export const loadUserActionCreate = (user: ApplicationUserType) : LoadUserActionType => ({
    type: LOAD_USER_ACTION_TYPE, user: user
})

export const addBalanceActionCreate = (increment: number) : AddBalanceActionType => ({
    type: ADD_BALANCE_ACTION_TYPE, increment: increment
})

export default AccountReducer;
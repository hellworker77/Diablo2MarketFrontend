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

let initialState : AccountStateType = {
    isAuthorized: true,
    me: {
        balance: 2403450,
        profilePictures: []
    },
    loadedUser: {
        balance: 20,
        profilePictures: []
    },
    selectedUserId: "",
}

const AccountReducer = (state = initialState, action: GlobalAccountActionType) : AccountStateType => {
    switch (action.type){
        case ADD_BALANCE_ACTION_TYPE:
            let user = state.loadedUser;
            if(user == null){
                return {
                    ...state
                }
            }
            user.balance += action.increment;
            return {
                ...state,
                loadedUser: {...user}
            }
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
        default:
            return {
                ...state
            }
    }
}

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
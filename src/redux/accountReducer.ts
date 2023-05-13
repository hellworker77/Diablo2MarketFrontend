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
import {
    LOAD_ACCOUNT_TOKEN_ACTION_TYPE,
    LoadAccountTokenActionType
} from "../types/reducerTypes/actionTypes/Account/LoadAccountTokenActionType";
import {Token, TokenManager} from "../utilities/TokenManager";
import {
    UPDATE_VERIFY_PASSWORD_ACTION_TYPE,
    UpdateVerifyPasswordActionType
} from "../types/reducerTypes/actionTypes/Account/UpdateVerifyPasswordActionType";
import {DealType} from "../types/models/DealType";
import {
    LOAD_USER_DEALS_ACTION_TYPE,
    LoadUserDealsActionType
} from "../types/reducerTypes/actionTypes/Account/LoadUserDealsActionType";
import {ItemType} from "../types/models/ItemType";
import {
    LOAD_USER_ITEMS_ACTION_TYPE,
    LoadUserItemsActionType
} from "../types/reducerTypes/actionTypes/Account/LoadUserItemsActionType";
import {
    LOAD_ME_DEALS_ACTION_TYPE,
    LoadMyDealsActionType
} from "../types/reducerTypes/actionTypes/Account/LoadMyDealsActionType";
import {
    LOAD_MY_ITEMS_ACTION_TYPE,
    LoadMyItemsActionType
} from "../types/reducerTypes/actionTypes/Account/LoadMyItemsActionType";

let initialToken = TokenManager.load("account api email offline_access openid profile trading");

let initialState : AccountStateType = {
    token: null,
    me: null,
    loadedUserGrantInfo: null,
    selectedUserId: "",
    name: "admin",
    email: "",
    password: "!QAZ2wsx",
    verifyPassword: ""
}

const AccountReducer = (state = initialState, action: GlobalAccountActionType) : AccountStateType => {
    switch (action.type){
        case LOAD_USER_ACTION_TYPE:
            return {
                ...state,
                loadedUserGrantInfo : {
                        userDeals: state.loadedUserGrantInfo?.userDeals ?? null,
                        userItems: state.loadedUserGrantInfo?.userItems ?? null,
                        user: {...action.user}
                }
            }
        case LOAD_USER_DEALS_ACTION_TYPE:
            return {
                ...state,
                loadedUserGrantInfo : {
                    userDeals: [...action.deals],
                    userItems: state.loadedUserGrantInfo?.userItems ?? null,
                    user: state.loadedUserGrantInfo?.user ?? null
                }
            }
        case LOAD_USER_ITEMS_ACTION_TYPE:
            return {
                ...state,
                loadedUserGrantInfo : {
                    userDeals: state.loadedUserGrantInfo?.userDeals ?? null,
                    userItems: [...action.items],
                    user: state.loadedUserGrantInfo?.user ?? null
                }
            }
        case LOAD_ME_ACTION_TYPE:
            return {
                ...state,
                me: {
                    userDeals: state.me?.userDeals ?? null,
                    userItems: state.me?.userItems ?? null,
                    user: {...action.me}
                }
            }
        case LOAD_ME_DEALS_ACTION_TYPE:
            return {
                ...state,
                me : {
                    userDeals: [...action.deals],
                    userItems: state.me?.userItems ?? null,
                    user: state.me?.user ?? null
                }
            }
        case LOAD_MY_ITEMS_ACTION_TYPE:
            return {
                ...state,
                me : {
                    userDeals: state.me?.userDeals ?? null,
                    userItems: [...action.items],
                    user: state.me?.user ?? null
                }
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
        case UPDATE_VERIFY_PASSWORD_ACTION_TYPE:
            return {
                ...state,
                verifyPassword: action.verifyPassword
            }
        case LOAD_ACCOUNT_TOKEN_ACTION_TYPE:
            return {
                ...state,
                token: {...action.token}
            }
        default:
            return {
                ...state
            }
    }
}

export const loadAccountTokenActionCreate = (token: Token): LoadAccountTokenActionType => ({
    type: LOAD_ACCOUNT_TOKEN_ACTION_TYPE, token: token
})

export const updateNameActionCreate = (name: string): UpdateNameActionType => ({
    type: UPDATE_NAME_ACTION_TYPE, name: name
})

export const updateEmailActionCreate = (email: string): UpdateEmailActionType => ({
    type: UPDATE_EMAIL_ACTION_TYPE, email: email
})

export const updatePasswordActionCreate = (password: string): UpdatePasswordActionType => ({
    type: UPDATE_PASSWORD_ACTION_TYPE, password: password
})

export const updateVerifyPasswordActionCreate = (verifyPassword: string): UpdateVerifyPasswordActionType => ({
    type: UPDATE_VERIFY_PASSWORD_ACTION_TYPE, verifyPassword: verifyPassword
})

export const selectUserIdActionCreate = (id: string) : SelectUserIdActionType => ({
    type: SELECT_USER_ID_ACTION_TYPE, id: id
})

export const loadMyDealsActionCreate = (deals: Array<DealType>) : LoadMyDealsActionType => ({
    type: LOAD_ME_DEALS_ACTION_TYPE, deals: deals
})

export const loadMyItemsActionCreate = (items: Array<ItemType>): LoadMyItemsActionType => ({
    type: LOAD_MY_ITEMS_ACTION_TYPE, items: items
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

export const loadUserDealsActionCreate = (deals: Array<DealType>) : LoadUserDealsActionType => ({
    type: LOAD_USER_DEALS_ACTION_TYPE, deals: deals
})

export const loadUserItemsActionCreate = (items: Array<ItemType>): LoadUserItemsActionType => ({
    type: LOAD_USER_ITEMS_ACTION_TYPE, items: items
})

export default AccountReducer;
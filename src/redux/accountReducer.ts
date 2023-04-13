import {AccountStateType} from "../types/reducerTypes/stateTypes/AccountStateType";
import {
    ADD_BALANCE_ACTION_TYPE,
    AddBalanceActionType
} from "../types/reducerTypes/actionTypes/Account/AddBalanceActionType";
import {GlobalAccountActionType} from "../types/reducerTypes/actionTypes/GlobalAccountActionType";

let initialState : AccountStateType = {
    isAuthorized: true,
    me: {
        balance: 2403450,
        profilePictures: []
    }
}

const AccountReducer = (state = initialState, action: GlobalAccountActionType) : AccountStateType => {
    switch (action.type){
        case ADD_BALANCE_ACTION_TYPE:
            let user = state.me;
            if(user == null){
                return {
                    ...state
                }
            }
            user.balance += action.increment;
            return {
                ...state,
                me: {...user}
            }
        default:
            return {
                ...state
            }
    }
}

export const addBalanceActionCreate = (increment: number) : AddBalanceActionType => ({
    type: ADD_BALANCE_ACTION_TYPE, increment: increment
})

export default AccountReducer;
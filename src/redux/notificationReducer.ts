import {NotificationStateType} from "../types/reducerTypes/stateTypes/NotificationStateType";
import {
    DELETE_BY_ID_ACTION_TYPE,
    DeleteByIdActionType
} from "../types/reducerTypes/actionTypes/Notification/deleteByIdActionType";
import {GlobalNotificationActionType} from "../types/reducerTypes/actionTypes/GlobalNotificationActionType";
import {
    ADD_NOTIFY_ACTION_TYPE,
    AddNotifyActionType
} from "../types/reducerTypes/actionTypes/Notification/addNotifyActionType";
import {NotifyPropsOwn} from "../types/props/NotificationProps";


let initialState : NotificationStateType = {
    notifications: []
}

export const NotificationReducer = (state = initialState, action: GlobalNotificationActionType) => {
    switch (action.type){
        case DELETE_BY_ID_ACTION_TYPE:
            return{
                ...state,
                notifications: [...state.notifications.filter(x=>x.id !== action.id)]
            }
        case ADD_NOTIFY_ACTION_TYPE:
            state.notifications.push(action.notify)
            return {
                ...state,
                notifications: [...state.notifications]
            }
        default:
            return {
                ...state
            }
    }
}

export const deleteByIdActionCreate = (id: string) : DeleteByIdActionType => ({
    type: DELETE_BY_ID_ACTION_TYPE , id: id
})

export const addNotifyActionCreate = (notify: NotifyPropsOwn) : AddNotifyActionType => ({
    type: ADD_NOTIFY_ACTION_TYPE, notify: notify
})
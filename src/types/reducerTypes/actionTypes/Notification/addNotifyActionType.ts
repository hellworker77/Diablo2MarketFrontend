import {NotifyPropsOwn} from "../../../props/NotificationProps";

export const ADD_NOTIFY_ACTION_TYPE = "ADD_NOTIFY_ACTION_TYPE"

export type AddNotifyActionType = {
    type: typeof ADD_NOTIFY_ACTION_TYPE,
    notify: NotifyPropsOwn
}
export enum NotifyStatus {
    None,
    Info,
    Success,
    Warning,
    Error,
    Critical
}

export type NotifyProps = NotifyPropsOwn & NotifyPropsDispatch

export type NotifyPropsOwn = {
    status: NotifyStatus
    message: string,
    id: string
}

export type NotifyPropsDispatch = {
    deleteById: (id: string) => void
}

export type NotificationProps = NotificationPropsState & NotificationPropsDispatch

export type NotificationPropsState = {
    notifies: Array<NotifyPropsOwn>
}

export type NotificationPropsDispatch = {

}
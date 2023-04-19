export const UPDATE_PASSWORD_ACTION_TYPE = "UPDATE_PASSWORD_ACTION_TYPE"

export type UpdatePasswordActionType = {
    password: string,
    type: typeof UPDATE_PASSWORD_ACTION_TYPE
}
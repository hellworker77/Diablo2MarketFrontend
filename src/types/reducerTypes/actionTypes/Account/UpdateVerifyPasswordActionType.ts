export const UPDATE_VERIFY_PASSWORD_ACTION_TYPE = "UPDATE_VERIFY_PASSWORD_ACTION_TYPE"

export type UpdateVerifyPasswordActionType = {
    verifyPassword: string,
    type: typeof UPDATE_VERIFY_PASSWORD_ACTION_TYPE
}
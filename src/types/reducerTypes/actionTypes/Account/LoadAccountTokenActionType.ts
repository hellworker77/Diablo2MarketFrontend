import {Token} from "../../../../utilities/TokenManager";

export const LOAD_ACCOUNT_TOKEN_ACTION_TYPE = "LOAD_ACCOUNT_TOKEN_ACTION_TYPE"

export type LoadAccountTokenActionType = {
    token: Token,
    type: typeof LOAD_ACCOUNT_TOKEN_ACTION_TYPE
}
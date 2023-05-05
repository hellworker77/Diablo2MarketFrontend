export const DELETE_BY_ID_ACTION_TYPE = "DELETE_BY_ID_ACTION_TYPE"

export type DeleteByIdActionType = {
    type: typeof DELETE_BY_ID_ACTION_TYPE,
    id: string
}
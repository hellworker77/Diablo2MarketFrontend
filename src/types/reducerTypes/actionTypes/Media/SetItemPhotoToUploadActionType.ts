export const SET_ITEM_PHOTO_TO_UPLOAD = "SET_ITEM_PHOTO_TO_UPLOAD"

export type SetItemPhotoToUploadActionType = {
    type: typeof SET_ITEM_PHOTO_TO_UPLOAD
    image: File
}
import {AddMediaActionType} from "./Media/AddMediaActionType";
import {SelectMediaActionType} from "./Media/SelectMediaActionType";
import {DisposeMediasActionType} from "./Media/DisposeMediasActionType";
import {SetBase64ImageActionType} from "./Media/SetBase64ImageActionType";

export type GlobalMediaActionType = AddMediaActionType |
    SelectMediaActionType |
    DisposeMediasActionType |
    SetBase64ImageActionType
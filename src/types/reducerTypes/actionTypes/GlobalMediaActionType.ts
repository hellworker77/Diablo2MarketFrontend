import {AddMediaActionType} from "./Media/AddMediaActionType";
import {SelectMediaActionType} from "./Media/SelectMediaActionType";
import {DisposeMediasActionType} from "./Media/DisposeMediasActionType";

export type GlobalMediaActionType = AddMediaActionType |
    SelectMediaActionType |
    DisposeMediasActionType 
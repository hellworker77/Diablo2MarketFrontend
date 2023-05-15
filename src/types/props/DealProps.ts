import {DealType} from "../models/DealType";
import {ItemShowMode} from "../models/enums/ItemShowMode";
import {Token} from "../../utilities/TokenManager";
import {NotifyPropsOwn} from "./NotificationProps";

export enum DealShowMode{
    Own,
    Another
}

export type DealProps = DealPropsState & DealPropsDispatch & DealPropsOwn

export type DealPropsState = {
    token: Token | null
}

export type DealPropsDispatch = {
    selectItemId: (id: string) => void
    addNotify: (notify: NotifyPropsOwn) => void
    changeItemShowMode: (mode: ItemShowMode) => void
}

export type DealPropsOwn = {
    deal: DealType
    mode: DealShowMode
}
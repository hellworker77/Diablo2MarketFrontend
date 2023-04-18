import {DealType} from "../models/DealType";
import {ItemShowMode} from "../models/enums/ItemShowMode";

export type DealProps = DealPropsState & DealPropsDispatch & DealPropsOwn

export type DealPropsState = {}

export type DealPropsDispatch = {
    selectItemId: (id: string) => void
    changeItemShowMode: (mode: ItemShowMode) => void
}

export type DealPropsOwn = {
    deal: DealType
}
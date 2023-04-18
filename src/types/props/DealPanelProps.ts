import {DealType} from "../models/DealType";
import {ItemShowMode} from "../models/enums/ItemShowMode";

export type DealPanelProps = DealPanelPropsState & DealPanelPropsDispatch & DealPanelPropsOwn

export type DealPanelPropsState = {}

export type DealPanelPropsDispatch = {
    selectItemId: (id: string) => void
    changeItemShowMode: (mode: ItemShowMode) => void
}

export type DealPanelPropsOwn = {
    deal: DealType
}
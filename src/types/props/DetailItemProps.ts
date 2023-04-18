import {ItemShowMode} from "../models/enums/ItemShowMode";
import {ItemType} from "../models/ItemType";

export type DetailItemProps = DetailItemPropsState & DetailItemPropsDispatch


export type DetailItemPropsState = {
    itemId: string,
    mode: ItemShowMode,
    loadedItem: ItemType | null
}

export type DetailItemPropsDispatch = {
    loadItem : (item: ItemType) => void
}


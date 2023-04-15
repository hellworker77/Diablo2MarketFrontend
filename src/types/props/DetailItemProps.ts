import {ItemShowMode} from "../models/enums/ItemShowMode";
import {ItemType} from "../models/ItemType";

export type DetailItemProps = DetailItemPropsState & DetailItemPropsDispatch


export type DetailItemPropsState = {
    item: ItemType,
    mode: ItemShowMode
}

export type DetailItemPropsDispatch = {

}


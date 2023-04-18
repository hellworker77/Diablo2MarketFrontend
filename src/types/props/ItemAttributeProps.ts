import {ItemShowMode} from "../models/enums/ItemShowMode";
import {ItemAttributeType} from "../models/ItemAttributeType";

export type ItemAttributeProps = ItemAttributeState & ItemAttributeDispatch & ItemAttributeOwn

export type ItemAttributeState = {
    mode: ItemShowMode
}

export type ItemAttributeDispatch = {

}

export type ItemAttributeOwn = {
    itemAttribute: ItemAttributeType
}
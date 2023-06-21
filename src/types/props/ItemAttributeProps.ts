import {ItemAttributeType} from "../models/ItemAttributeType";

export type ItemAttributeProps = ItemAttributeState & ItemAttributeDispatch & ItemAttributeOwn

export type ItemAttributeState = {

}

export type ItemAttributeDispatch = {

}

export type ItemAttributeOwn = {
    itemAttribute: ItemAttributeType
}
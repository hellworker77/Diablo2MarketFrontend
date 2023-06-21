import {ItemType} from "../models/ItemType";
import {NotifyPropsOwn} from "./NotificationProps";
import {Token} from "../../utilities/TokenManager";

export type ItemProps = ItemPropsState & ItemPropsDispatch

export type ItemPropsState = {
    itemId: string
    token: Token | null
    loadedItem: ItemType | null
}

export type ItemPropsDispatch = {
    loadItem : (item: ItemType) => void
    addNotify: (notify: NotifyPropsOwn) => void
}


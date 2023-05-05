import {ItemShowMode} from "../models/enums/ItemShowMode";
import {ItemType} from "../models/ItemType";
import {NotifyPropsOwn} from "./NotificationProps";

export type ItemProps = ItemPropsState & ItemPropsDispatch


export type ItemPropsState = {
    itemId: string,
    mode: ItemShowMode,
    loadedItem: ItemType | null
}

export type ItemPropsDispatch = {
    loadItem : (item: ItemType) => void
    addNotify: (notify: NotifyPropsOwn) => void
}


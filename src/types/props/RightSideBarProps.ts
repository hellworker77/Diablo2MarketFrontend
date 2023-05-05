import {DealType} from "../models/DealType";
import {NotifyPropsOwn} from "./NotificationProps";

export type RightSideBarProps = RightSideBarPropsState & RightSideBarPropsDispatch


export type RightSideBarPropsState = {
    last24Deals: Array<DealType>
}

export type RightSideBarPropsDispatch = {
    loadLast24Deals: (deals: Array<DealType>) => void
    addNotify: (notify: NotifyPropsOwn) => void
}
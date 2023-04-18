import {DealType} from "../models/DealType";

export type RightSideBarProps = RightSideBarPropsState & RightSideBarPropsDispatch


export type RightSideBarPropsState = {
    last24Deals: Array<DealType>
}

export type RightSideBarPropsDispatch = {
    loadLast24Deals: (deals: Array<DealType>) => void
}
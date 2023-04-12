import {ItemType} from "./ItemType";

export type ApplicationUserType = {
    balance: number,
    profilePictures: Array<string>,
    items?: Array<ItemType>
}
import {ItemType} from "./ItemType";
import {MediaShortType} from "./MediaType";

export type ApplicationUserType = {
    id: string
    balance: number
    profilePictures: Array<MediaShortType>
    items?: Array<ItemType>
    email: string
    userName: string
}
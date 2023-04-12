import {DealMemberType} from "./DealMemberType";
import {DiscussionType} from "./DiscussionType";
import {ItemType} from "./ItemType";
import {DealStatusEnum} from "./enums/DealStatusEnum";

export type DealType = {
    id: string,
    dealMembers: Array<DealMemberType>,
    discussion: DiscussionType,
    goods: ItemType,
    status: DealStatusEnum,
    transactionDate: Date
}
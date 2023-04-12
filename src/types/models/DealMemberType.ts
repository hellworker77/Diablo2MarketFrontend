import {DealMemberStatusEnum} from "./enums/DealMemberStatusEnum";

export type DealMemberType = {
    id: string,
    userId: string,
    dealId: string,
    approved: boolean,
    status: DealMemberStatusEnum
}
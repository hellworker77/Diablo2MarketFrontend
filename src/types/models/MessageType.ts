import {ApplicationUserType} from "./ApplicationUserType";

export type MessageType = {
    id: string,
    innerText: string,
    discussionId: string,
    sender: ApplicationUserType,
    attachmentsId?: Array<string>
}
import {ApplicationUserType} from "./ApplicationUserType";

export type DiscussionType = {
    id:string,
    members: Array<ApplicationUserType>
}
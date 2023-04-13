import {ApplicationUserType} from "../../models/ApplicationUserType";

export type AccountStateType = {
    isAuthorized: boolean,
    me: ApplicationUserType | null

}
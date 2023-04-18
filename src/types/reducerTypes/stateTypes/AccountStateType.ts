import {ApplicationUserType} from "../../models/ApplicationUserType";
import {ProfileLoadMode} from "../../models/enums/ProfileLoadMode";

export type AccountStateType = {
    isAuthorized: boolean
    me: ApplicationUserType | null
    loadedUser: ApplicationUserType | null
    selectedUserId: string
}
import {ProfileLoadMode} from "../models/enums/ProfileLoadMode";
import {ApplicationUserType} from "../models/ApplicationUserType";

export type ProfileProps = ProfilePropsState & ProfilePropsDispatch

export type ProfilePropsState = {
    userId: string,
    me: ApplicationUserType | null,
}

export type ProfilePropsDispatch = {
}
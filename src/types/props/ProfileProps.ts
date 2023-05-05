import {ApplicationUserType} from "../models/ApplicationUserType";
import {Token} from "../../utilities/TokenManager";

export type ProfileProps = ProfilePropsState & ProfilePropsDispatch

export type ProfilePropsState = {
    token: Token | null
    me: ApplicationUserType | null,
}

export type ProfilePropsDispatch = {}
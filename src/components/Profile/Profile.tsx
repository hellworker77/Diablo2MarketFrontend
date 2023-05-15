import React, {useEffect, useMemo} from "react"
import {ProfileProps} from "../../types/props/ProfileProps";
import userModule from "../../styles/User/User.module.css"
import {GetMeRequestManager} from "../../utilities/RequestManagers/AccountManagers/GetMeRequestManager";
import {Page} from "../../utilities/RequestManagers/Pages/Page";
import {GetMyItemsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetMyItemsRequestManager";
import {GetMyDealsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetMyDealsRequestManager";
import {Picture} from "./Subcomponents/Picture";
import {Header} from "./Subcomponents/Header";
import {
    GetMyItemsCountRequestManager
} from "../../utilities/RequestManagers/TradingManagers/GetMyItemsCountRequestManager";
import {
    GetMyDealsCountRequestManager
} from "../../utilities/RequestManagers/TradingManagers/GetMyDealsCountRequestManager";
import {LastDeals} from "./Subcomponents/LastDeals";
import {Items} from "./Subcomponents/Items";
import {ItemShowMode} from "../../types/models/enums/ItemShowMode";
import {DealShowMode} from "../../types/props/DealProps";

const Profile = (props: ProfileProps) => {
    const pageSize = 30

    const loadMe = () => {
        if (props.token !== null) {
            let requestManager = new GetMeRequestManager(props.addNotify, Profile.name);

            requestManager.buildConfig({token: props.token})

            requestManager.queryCallback(props.loadMe).then()
        }

    }

    const getMyItemsCountRequestManager = useMemo(() => {
        return new GetMyItemsCountRequestManager(props.addNotify, Profile.name)
    }, [])


    const getMyItemsRequestManager = useMemo(() => {
        return new GetMyItemsRequestManager(props.addNotify,
            Profile.name,
            new Page(0, pageSize, props.token ?? undefined))
    }, [])

    const getMyDealsCountRequestManager = useMemo(() => {
        return new GetMyDealsCountRequestManager(props.addNotify, Profile.name)
    }, [])


    const getMyDealsRequestManager = useMemo(() => {
        return new GetMyDealsRequestManager(props.addNotify,
            Profile.name,
            new Page(0, pageSize, props.token ?? undefined))
    }, [])


    useEffect(() => {
        loadMe()

        getMyDealsRequestManager
            .configureFrom(getMyDealsCountRequestManager, {token: props.token})

        getMyItemsRequestManager
            .configureFrom(getMyItemsCountRequestManager, {token: props.token})
    }, [])
    return (
        <div className={userModule.wrapper}>
            <Picture medias={props.me?.profilePictures ?? []}/>
            <div className={userModule.container}>
                <Header userName={props.me?.userName ?? ""} balance={props.me?.balance ?? 0}/>
                <LastDeals deals={props.myDeals}
                           manager={getMyDealsRequestManager}
                           loadData={props.loadMyDeals}
                           mode={DealShowMode.Own}/>
                <Items items={props.myItems}
                       itemShowMode={ItemShowMode.View}
                       manager={getMyItemsRequestManager}
                       loadData={props.loadMyItems}/>
            </div>
        </div>
    )
}
export default Profile;
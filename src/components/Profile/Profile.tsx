import React, {useEffect, useMemo} from "react"
import {ProfileProps} from "../../types/props/ProfileProps";
import userModule from "../../styles/User/User.module.css"
import {GetMeRequestManager} from "../../utilities/RequestManagers/AccountManagers/GetMeRequestManager";
import {Page} from "../../utilities/RequestManagers/Pages/Page";
import {GetMyItemsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetMyItemsRequestManager";
import {GetSuccessDealsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetSuccessDealsRequestManager";
import {Picture} from "./Subcomponents/Picture";
import {Header} from "./Subcomponents/Header";
import {
    GetMyItemsCountRequestManager
} from "../../utilities/RequestManagers/TradingManagers/GetMyItemsCountRequestManager";
import {
    GetSuccessDealsCountRequestManager
} from "../../utilities/RequestManagers/TradingManagers/GetSuccessDealsCountRequestManager";
import {LastDeals} from "./Subcomponents/LastDeals";
import {Items} from "./Subcomponents/Items";
import {DealShowMode} from "../../types/props/DealProps";
import {
    GetInProgressDealsCountRequestManager
} from "../../utilities/RequestManagers/TradingManagers/GetInProgressDealsCountRequestManager";
import {
    GetInProgressDealsRequestManager
} from "../../utilities/RequestManagers/TradingManagers/GetInProgressDealsRequestManager";

const Profile = (props: ProfileProps) => {
    const pageSize = 2

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

    const getSuccessDealsCountRequestManager = useMemo(() => {
        return new GetSuccessDealsCountRequestManager(props.addNotify, Profile.name)
    }, [])


    const getSuccessDealsRequestManager = useMemo(() => {
        return new GetSuccessDealsRequestManager(props.addNotify,
            Profile.name,
            new Page(0, pageSize, props.token ?? undefined))
    }, [])

    const getInProgressDealsCountRequestManager = useMemo(() => {
        return new GetInProgressDealsCountRequestManager(props.addNotify, Profile.name)
    }, [])


    const getInProgressDealsRequestManager = useMemo(() => {
        return new GetInProgressDealsRequestManager(props.addNotify,
            Profile.name,
            new Page(0, pageSize, props.token ?? undefined))
    }, [])


    useEffect(() => {
        loadMe()

        getSuccessDealsRequestManager
            .configureFrom(getSuccessDealsCountRequestManager, {token: props.token})

        getInProgressDealsRequestManager
            .configureFrom(getInProgressDealsCountRequestManager, {token: props.token})

        getMyItemsRequestManager
            .configureFrom(getMyItemsCountRequestManager, {token: props.token})
    }, [])
    return (
        <div className={userModule.wrapper}>
            <Picture medias={props.me?.profilePictures ?? []}/>
            <div className={userModule.container}>
                <Header userName={props.me?.userName ?? ""} balance={props.me?.balance ?? 0}/>
                <Items items={props.myItems}
                       manager={getMyItemsRequestManager}
                       loadData={props.loadMyItems}/>
                <LastDeals deals={props.mySuccessDeals}
                           manager={getSuccessDealsRequestManager}
                           loadData={props.loadMySuccessDeals}
                           mode={DealShowMode.Own}
                           header={"Last Success Deals"}/>
                <LastDeals deals={props.myInProgressDeals}
                           manager={getInProgressDealsRequestManager}
                           loadData={props.loadMyInProgressDeals}
                           mode={DealShowMode.Own}
                           header={"In Progress Deals"}/>
            </div>
        </div>
    )
}
export default Profile;
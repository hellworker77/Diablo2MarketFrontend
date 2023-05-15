import React, {useEffect, useMemo} from 'react'
import {UserProps} from "../../types/props/UserProps";
import userModule from "../../styles/User/User.module.css"
import {GetUserByIdRequestManager} from "../../utilities/RequestManagers/AccountManagers/GetUserByIdRequestManager";
import {GetUserDealsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetUserDealsRequestManager";
import {PageWithUserId} from "../../utilities/RequestManagers/Pages/PageWithUserId";
import {GetUserItemsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetUserItemsRequestManager";
import {Picture} from "./Subcomponents/Picture";
import {Header} from "./Subcomponents/Header";
import {Items} from "./Subcomponents/Items";
import {
    GetUserDealsCountRequestManager
} from "../../utilities/RequestManagers/TradingManagers/GetUserDealsCountRequestManager";
import {LastDeals} from "./Subcomponents/LastDeals";
import {
    GetUserItemsCountRequestManager
} from "../../utilities/RequestManagers/TradingManagers/GetUserItemsCountRequestManager";
import {ItemShowMode} from "../../types/models/enums/ItemShowMode";
import {DealShowMode} from "../../types/props/DealProps";


const User = (props: UserProps) => {
    const pageSize = 5

    const loadUser = () => {
        let requestManager = new GetUserByIdRequestManager(props.addNotify, typeof User);

        requestManager.buildConfig({userId: props.selectedUserId})

        requestManager.queryCallback(props.loadUser).then()
    }

    const getUserDealsCountRequestManager = useMemo(() => {
        return new GetUserDealsCountRequestManager(props.addNotify, User.name)
    }, [])

    const getUserDealsRequestManager = useMemo(() => {
        return new GetUserDealsRequestManager(props.addNotify,
            User.name,
            new PageWithUserId(0, pageSize, undefined, props.selectedUserId))
    }, [])

    const getUserItemsCountRequestManager = useMemo(() => {
        return new GetUserItemsCountRequestManager(props.addNotify, User.name)
    }, [])

    const getUserItemsRequestManager = useMemo(() => {
        return new GetUserItemsRequestManager(props.addNotify,
            User.name,
            new PageWithUserId(0, pageSize, undefined, props.selectedUserId))
    }, [])


    useEffect(() => {
        loadUser()
        getUserDealsRequestManager
            .configureFrom(getUserDealsCountRequestManager, {userId: props.selectedUserId})

        getUserItemsRequestManager
            .configureFrom(getUserItemsCountRequestManager, {userId: props.selectedUserId})

    }, [props])

    return (
        <div className={userModule.wrapper}>
            <Picture medias={props.user?.profilePictures ?? []}/>
            <div className={userModule.container}>
                <Header userName={props.user?.userName ?? ""} balance={props.user?.balance ?? 0}/>
                <LastDeals deals={props.userDeals}
                           manager={getUserDealsRequestManager}
                           loadData={props.loadUserDeals}
                           mode={DealShowMode.Another}/>
                <Items items={props.userItems}
                       itemShowMode={ItemShowMode.Order}
                       manager={getUserItemsRequestManager}
                       loadData={props.loadUserItems}/>
            </div>
        </div>
    )
}

/*


*/
export default User;
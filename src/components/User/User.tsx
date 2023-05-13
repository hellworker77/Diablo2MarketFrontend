import React, {useEffect, useState} from 'react'
import {UserProps} from "../../types/props/UserProps";
import uiModule from "../../styles/Ui.module.css"
import userModule from "../../styles/User/User.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins, faSackDollar, faScaleBalanced} from "@fortawesome/free-solid-svg-icons";
import DealContainer from "../Deal/DealContainer";
import {TradeItemShowMode} from "../../types/props/TradeItemProps";
import TradeItemContainer from "../Trade/TradeItem/TradeItemContainer";
import {GetUserByIdRequestManager} from "../../utilities/RequestManagers/AccountManagers/GetUserByIdRequestManager";
import {GetUserDealsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetUserDealsRequestManager";
import {PageWithUserId} from "../../utilities/RequestManagers/Pages/PageWithUserId";
import {GetUserItemsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetUserItemsRequestManager";
import ImageSwiperContainer from "../ImageSwipper/ImageSwiperContainer";


const User = (props: UserProps) => {
    const pageSize = 30

    const loadUser = () => {
        let requestManager = new GetUserByIdRequestManager(props.addNotify, typeof User);

        requestManager.buildConfig({userId: props.selectedUserId})

        requestManager.queryCallback(props.loadUser).then()
    }

    const [getUserDealsRequestManager, setGetUserDealsRequestManager] = useState(
        new GetUserDealsRequestManager(props.addNotify,
            typeof User,
            new PageWithUserId(0, pageSize, undefined, props.selectedUserId))
    )

    const [getUserItemsRequestManager, setGetUserItemsRequestManager] = useState(
        new GetUserItemsRequestManager(props.addNotify,
            typeof User,
            new PageWithUserId(0, pageSize, undefined, props.selectedUserId))
    )

    const loadUserDeals = () => {
        getUserDealsRequestManager.begin(props.loadUserDeals)
    }

    const loadUserItems = () => {
        getUserItemsRequestManager.begin(props.loadUserItems)
    }

    useEffect(() => {
        loadUser()
        loadUserDeals()
        loadUserItems()
    }, [])

    return (
        <div className={userModule.wrapper}>
            <div className={userModule.image_container}
                 style={{width: "100%", aspectRatio: "1/1"}}>
                <ImageSwiperContainer imageShorts={props.user?.profilePictures ?? []}/>
            </div>

            <div className={userModule.container}>
                <div className={`${userModule.frame_top} ${uiModule.frame_brown}`}>
                    <div className={userModule.frame_content}
                         style={{flexDirection: "row"}}>
                        <div className={`${uiModule.header} ${uiModule.row_content_container}`}>
                            {props.user?.userName}
                        </div>
                        <div className={`${uiModule.header} ${uiModule.row_content_container}`}
                             style={{margin: '0 0 0 auto'}}>
                            {props.user?.balance}
                            <FontAwesomeIcon icon={faSackDollar}
                                             style={{marginLeft: "10px"}}/>
                        </div>
                    </div>
                </div>
                <div className={`${userModule.frame_right} ${uiModule.frame_brown}`}>
                    <div className={userModule.frame_content}>
                        <div className={`${uiModule.header}`}
                             style={{borderBottom: "2px solid black ", paddingBottom: "5px"}}>
                            Last Deals
                            <FontAwesomeIcon icon={faCoins}
                                             style={{marginLeft: "10px"}}/>

                        </div>
                        <div style={{marginTop: "20px"}}>
                            {props.userDeals?.map(deal =>
                                <DealContainer key={deal.id} deal={deal}/>)}
                        </div>
                    </div>
                </div>
                <div className={`${userModule.frame_left} ${uiModule.frame_brown}`}>
                    <div className={userModule.frame_content}>
                        <div className={`${uiModule.header}`}
                             style={{borderBottom: "2px solid black ", paddingBottom: "5px"}}>
                            Trades
                            <FontAwesomeIcon icon={faScaleBalanced}
                                             style={{marginLeft: "10px"}}/>
                        </div>
                        <div className={uiModule.scrollBar} style={{overflowY: "auto"}}>
                            {props.userItems?.map(item =>
                                <TradeItemContainer mode={TradeItemShowMode.InUser}
                                                    item={item}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;
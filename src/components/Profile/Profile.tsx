import React, {useEffect, useState} from "react"
import {ProfileProps} from "../../types/props/ProfileProps";
import userModule from "../../styles/User/User.module.css"
import uiModule from "../../styles/Ui.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins, faSackDollar, faScaleBalanced} from "@fortawesome/free-solid-svg-icons";
import DealContainer from "../Deal/DealContainer";
import TradeItemContainer from "../Trade/TradeItem/TradeItemContainer";
import {TradeItemShowMode} from "../../types/props/TradeItemProps";
import {GetMeRequestManager} from "../../utilities/RequestManagers/AccountManagers/GetMeRequestManager";
import {Page} from "../../utilities/RequestManagers/Pages/Page";
import {GetMyItemsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetMyItemsRequestManager";
import {GetMyDealsRequestManager} from "../../utilities/RequestManagers/TradingManagers/GetMyDealsRequestManager";
import ImageSwiperContainer from "../ImageSwipper/ImageSwiperContainer";
import {MediaTypeEnum} from "../../types/models/enums/MediaTypeEnum";

const Profile = (props: ProfileProps) => {
    const pageSize = 30

    const loadMe = () => {
        if (props.token !== null) {
            let requestManager = new GetMeRequestManager(props.addNotify, Profile.name);

            requestManager.buildConfig({token: props.token})

            requestManager.queryCallback(props.loadMe).then()
        }

    }

    const [getMyItemsRequestManager, setGetMyrItemsRequestManager] = useState(
        new GetMyItemsRequestManager(props.addNotify,
            Profile.name,
            new Page(0, pageSize, props.token ?? undefined))
    )

    const [getMyDealsRequestManager, setGetMyDealsRequestManager] = useState(
        new GetMyDealsRequestManager(props.addNotify,
            Profile.name,
            new Page(0, pageSize, props.token ?? undefined))
    )

    const loadMyDeals = () => {
        getMyDealsRequestManager.begin(props.loadMyDeals)
    }

    const loadMyItems = () => {
        getMyItemsRequestManager.begin(props.loadMyItems)
    }

    useEffect(() => {
        loadMe()
        loadMyDeals()
        loadMyItems()
    }, [])
    return (
        <div className={userModule.wrapper}>
            <div className={userModule.image_container}
                 style={{width: "100%", aspectRatio: "1/1"}}>
                <ImageSwiperContainer imageShorts={props.me?.profilePictures ?? []}/>
            </div>

            <div className={userModule.container}>
                <div className={`${userModule.frame_top} ${uiModule.frame_brown}`}>
                    <div className={userModule.frame_content}
                         style={{flexDirection: "row"}}>
                        <div className={`${uiModule.header} ${uiModule.row_content_container}`}>
                            {props.me?.userName}
                        </div>
                        <div className={`${uiModule.header} ${uiModule.row_content_container}`}
                             style={{margin: '0 0 0 auto'}}>
                            {props.me?.balance}
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
                            {props.myDeals?.map(deal =>
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
                            {props.myItems?.map(item =>
                                <TradeItemContainer mode={TradeItemShowMode.InUser}
                                                    item={item}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
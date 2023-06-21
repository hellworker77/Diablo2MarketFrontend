import React, {useMemo, useState} from "react"
import {DealProps, DealShowMode} from "../../types/props/DealProps";
import {getExpiresTime} from "../../utilities/getExpiresTime";
import uiModule from "../../styles/Ui.module.css"
import dealPanelModule from "../../styles/Deal/Deal.module.css"
import tradeItemModule from "../../styles/Trade/TradeItem.module.css";
import {NavLink} from "react-router-dom";
import {DealStatusEnum} from "../../types/models/enums/DealStatusEnum";
import {ApproveDealRequestManager} from "../../utilities/RequestManagers/TradingManagers/ApproveDealRequestManager";
import {DealApproveConfirm} from "./DealApproveConfirm";
import goldIcon from "../../images/icons/golddrop.png";

const Deal = (props: DealProps) => {

    const [confirmedWindowShow, setConfirmedWindowShow] = useState(false)

    const approveDealRequestManager = useMemo(() => {
        return new ApproveDealRequestManager(props.addNotify, Deal.name)
    }, [])

    const approveDeal = () => {
        if (props.token !== null) {
            let params = {
                token: props.token,
                dealId: props.deal.id
            }

            approveDealRequestManager.buildConfig(params)
            approveDealRequestManager.queryData().then()
        }
        setConfirmedWindowShow(false)
    }

    return (
        <div className={`${dealPanelModule.container} ${uiModule.row_content_container}`}>
            {
                confirmedWindowShow ?
                    <DealApproveConfirm
                        onConfirmed={() => approveDeal()}
                        onCanceled={() => {
                            setConfirmedWindowShow(false)
                        }}/> : ""
            }
            <div className={uiModule.row_content_container}>
                <div className={uiModule.tinyBoxContainer}>
                    {props.deal.goods.price}
                    <img alt={"icon"}
                         style={{marginRight: "0"}}
                         src={goldIcon}></img>
                </div>
                <div>
                    <NavLink to={`/ItemShow`}
                             className={tradeItemModule.link}
                             style={{margin: "auto 0 auto 10px"}}
                             onClick={() => {
                                 props.selectItemId(props.deal.goods.id)
                             }}>
                        {props.deal.goods.name}
                    </NavLink>
                </div>
            </div>
            <div className={uiModule.time}>{getExpiresTime(props.deal.transactionDate)}</div>
            <div style={{margin: "0 5px 5px auto"}}>
                {props.deal.status === DealStatusEnum.InProgress && props.mode === DealShowMode.Own ?
                    <div className={uiModule.button}
                         onClick={() => setConfirmedWindowShow(true)}>
                        <div className={uiModule.green}>
                            <div style={{margin: "5px"}}>
                                Approve
                            </div>
                        </div>
                    </div> : ""}
            </div>
        </div>
    )
}

export default Deal;
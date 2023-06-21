import React, {useMemo} from 'react';
import uiModule from "../../styles/Ui.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faPencil, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {CreateDealRequestManager} from "../../utilities/RequestManagers/TradingManagers/CreateDealRequestManager";
import {Token} from "../../utilities/TokenManager";
import {NotifyPropsOwn} from "../../types/props/NotificationProps";
import {ItemType} from "../../types/models/ItemType";

export type ItemButtonsProps = ItemButtonsPropsState & ItemButtonsPropsDispatch

export type ItemButtonsPropsState = {
    item: ItemType | null
    token: Token | null
    observerId: string
}

export type ItemButtonsPropsDispatch = {
    addNotify: (notify: NotifyPropsOwn) => void
}

enum AccessLevel {
    Unauthorized,
    View,
    Edit
}

export const ItemButtons = (props: ItemButtonsProps) => {
    let createDealRequestManager = useMemo(() => {
        return new CreateDealRequestManager(props.addNotify, ItemButtons.name)
    }, [])

    const createDeal = () => {
        if (props.token !== null) {
            let params = {
                itemId: props.item?.id ?? "",
                token: props.token
            }

            createDealRequestManager.buildConfig(params)
            createDealRequestManager.queryData().then()
        }
    }

    const getAccessLevel = (): AccessLevel =>{
        let result = AccessLevel.Unauthorized
        if(props.observerId !== "" &&
            props.observerId !== props.item?.ownerId){
            result = AccessLevel.View
        }
        if(props.observerId !== "" &&
            props.observerId === props.item?.ownerId){
            result = AccessLevel.Edit
        }

        return result
    }

    const generateOptionalButtons = (accessLevel: AccessLevel) => {
        if(accessLevel === AccessLevel.View){
            return <div className={uiModule.button}
                        style={{margin: "0 10px 10px auto"}}
                        onClick={() => createDeal()}>
                <div className={uiModule.green}>
                    <div style={{margin: "auto auto auto 5px"}}>
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </div>
                    <div style={{margin: "auto 5px auto auto"}}>
                        Order
                    </div>
                </div>
            </div>
        }
        if(accessLevel === AccessLevel.Edit){
            return <div  style={{margin: "0 5px 5px auto"}}>
                <div className={uiModule.button}
                     data-disabled={props.item?.dealId !== null}
                     style={{margin: "0 10px 10px auto"}}>
                    <div className={uiModule.green}>
                        <div style={{margin: "auto auto auto 5px"}}>
                            <FontAwesomeIcon icon={faPencil}/>
                        </div>
                        <div style={{margin: "auto 5px auto auto"}}>
                            Edit
                        </div>
                    </div>

                </div>
                <div className={uiModule.button}
                     data-disabled={props.item?.dealId !== null}
                     style={{margin: "0 10px 10px auto"}}>
                    <div className={uiModule.gray}>
                        <div style={{margin: "auto auto auto 5px"}}>
                            <FontAwesomeIcon icon={faTrashCan}/>
                        </div>
                        <div style={{margin: "auto 5px auto auto"}}>
                            Delete
                        </div>
                    </div>

                </div>
            </div>
        }
        return <div></div>
    }

    return generateOptionalButtons(getAccessLevel())
};
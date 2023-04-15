import {TradingStateType} from "../types/reducerTypes/stateTypes/TradingStateType";
import {ItemRarityEnum} from "../types/models/enums/ItemRarityEnum";
import {GlobalTradingActionType} from "../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {
    SELECT_ITEM_ACTION_TYPE,
    SelectItemActionType
} from "../types/reducerTypes/actionTypes/Trading/selectItemActionType";
import {ItemShowMode} from "../types/models/enums/ItemShowMode";
import {
    SELECT_ITEM_SHOW_MODE_ACTION_TYPE,
    SelectItemShowModeActionType
} from "../types/reducerTypes/actionTypes/Trading/SelectItemShowModeActionType";


let initialState : TradingStateType = {
    items:[
        {
            id: "guid-text-id",
            price: 20,
            name:"sword",
            itemRarity: ItemRarityEnum.Common,
            attributes: [
                {
                    id: "guid-text-id",
                    name: "1 to All Skills",
                    description: "Attr"
                }
            ],
            postedDate: new Date(Date.now()),
            ownerId: "guid-text-id"
        },
        {
            id: "guid-text-id",
            price: 20,
            name:"sword",
            itemRarity: ItemRarityEnum.Common,
            attributes: [
                {
                    id: "guid-text-id",
                    name: "1 to All Skills",
                    description: "Attr"
                }
            ],
            postedDate: new Date(Date.now()),
            ownerId: "guid-text-id"
        },
        {
            id: "guid-text-id",
            price: 20,
            name:"sword",
            itemRarity: ItemRarityEnum.Common,
            attributes: [
                {
                    id: "guid-text-id",
                    name: "1 to All Skills",
                    description: "Attr"
                }
            ],
            postedDate: new Date(Date.now()),
            ownerId: "guid-text-id"
        },
        {
            id: "guid-text-id",
            price: 20,
            name:"sword",
            itemRarity: ItemRarityEnum.Common,
            attributes: [
                {
                    id: "guid-text-id",
                    name: "1 to All Skills",
                    description: "Attr"
                }
            ],
            postedDate: new Date(Date.now() - 2000000000),
            ownerId: "guid-text-id"
        },
        {
            id: "guid-text-id",
            price: 20,
            name:"sword",
            itemRarity: ItemRarityEnum.Common,
            attributes: [
                {
                    id: "guid-text-id",
                    name: "1 to All Skills",
                    description: "Attr"
                }
            ],
            postedDate: new Date(Date.now()),
            ownerId: "guid-text-id"
        },
        {
            id: "guid-text-id",
            price: 20,
            name:"sword",
            itemRarity: ItemRarityEnum.Common,
            attributes: [
                {
                    id: "guid-text-id",
                    name: "1 to All Skills",
                    description: "Attr"
                }
            ],
            postedDate: new Date(Date.now()),
            ownerId: "guid-text-id"
        }
    ],
    selectedItemId: "",
    itemShowMode: ItemShowMode.View,
    loadedItem: null,
    deals: []
}

const TradingReducer = (state = initialState, action: GlobalTradingActionType) : TradingStateType => {
    switch (action.type){
        case SELECT_ITEM_ACTION_TYPE:
            return {
                ...state,
                selectedItemId: action.id
            }
        case SELECT_ITEM_SHOW_MODE_ACTION_TYPE:
            return {
                ...state,
                itemShowMode: action.mode
            }
        default:
            return {
                ...state
            }
    }
}

export const selectItemActionCreate = (id: string) : SelectItemActionType =>({
    type: SELECT_ITEM_ACTION_TYPE, id: id
})

export const selectItemShowModeActionCreate = (mode: ItemShowMode): SelectItemShowModeActionType => ({
    type: SELECT_ITEM_SHOW_MODE_ACTION_TYPE, mode: mode
})

export default TradingReducer;
import {TradingStateType} from "../types/reducerTypes/stateTypes/TradingStateType";
import {ItemRarityEnum} from "../types/models/enums/ItemRarityEnum";
import {GlobalTradingActionType} from "../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {
    SELECT_ITEM_ACTION_TYPE,
    SelectItemActionType
} from "../types/reducerTypes/actionTypes/Trading/SelectItemActionType";
import {ItemShowMode} from "../types/models/enums/ItemShowMode";
import {
    SELECT_ITEM_SHOW_MODE_ACTION_TYPE,
    SelectItemShowModeActionType
} from "../types/reducerTypes/actionTypes/Trading/SelectItemShowModeActionType";
import {ItemType} from "../types/models/ItemType";
import {LOAD_ITEM_ACTION_TYPE, LoadItemActionType} from "../types/reducerTypes/actionTypes/Trading/LoadItemActionType";
import {
    LOAD_ITEMS_ACTION_TYPE,
    LoadItemsActionType
} from "../types/reducerTypes/actionTypes/Trading/LoadItemsActionType";


let initialState : TradingStateType = {
    items:[
        {
            id: "guid-text-id",
            price: 20,
            name:"sword",
            rarity: ItemRarityEnum.Common,
            attributes: [
                {
                    id: "guid-text-id",
                    name: "1 to All Skills",
                    description: "Attr"
                }
            ],
            dealId: null,
            postedDate: "2023-04-17T11:40:52.000977Z",
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
        case LOAD_ITEM_ACTION_TYPE:
            return {
                ...state,
                loadedItem: {...action.item}
            }
        case LOAD_ITEMS_ACTION_TYPE:
            return {
                ...state,
                items: [...action.items]
            }
        default:
            return {
                ...state
            }
    }
}

export const loadItemsActionCreate = (items: Array<ItemType>) : LoadItemsActionType => ({
    type: LOAD_ITEMS_ACTION_TYPE, items: items
})

export const loadItemActionCreate = (item: ItemType) : LoadItemActionType => ({
    type: LOAD_ITEM_ACTION_TYPE, item: item
})

export const selectItemActionCreate = (id: string) : SelectItemActionType =>({
    type: SELECT_ITEM_ACTION_TYPE, id: id
})

export const selectItemShowModeActionCreate = (mode: ItemShowMode): SelectItemShowModeActionType => ({
    type: SELECT_ITEM_SHOW_MODE_ACTION_TYPE, mode: mode
})

export default TradingReducer;
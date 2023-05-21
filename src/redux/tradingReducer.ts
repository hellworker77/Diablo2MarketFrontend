import {TradingStateType} from "../types/reducerTypes/stateTypes/TradingStateType";
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
import {DealType} from "../types/models/DealType";
import {
    LOAD_LAST_24_HOURS_ACTION_TYPE,
    LoadLast24HoursDealsActionType
} from "../types/reducerTypes/actionTypes/Trading/LoadLast24HoursDealsActionType";
import {
    LOAD_LAST_DEALS_ACTION_TYPE,
    LoadLastDealsActionType
} from "../types/reducerTypes/actionTypes/Trading/LoadLastDealsActionType";
import {ItemRarityEnum} from "../types/models/enums/ItemRarityEnum";
import {
    SET_ITEM_NAME_TO_UPLOAD,
    SetItemNameToUploadActionType
} from "../types/reducerTypes/actionTypes/Trading/SetItemNameToUploadActionType";
import {
    SET_ITEM_RARITY_TO_UPLOAD,
    SetItemRarityToUploadActionType
} from "../types/reducerTypes/actionTypes/Trading/SetItemRarityToUploadActionType";
import {
    ADD_ATTRIBUTE_ITEM,
    AddAttributeItemActionType
} from "../types/reducerTypes/actionTypes/Trading/AddAttributeItemActionType";
import {v4} from "uuid";
import {
    SET_ITEM_ATTRIBUTE,
    SetItemAttributeActionType
} from "../types/reducerTypes/actionTypes/Trading/SetItemAttributeActionType";
import {
    DELETE_ITEM_ATTRIBUTE,
    DeleteItemAttributeActionType
} from "../types/reducerTypes/actionTypes/Trading/DeleteItemAttributeActionType";
import {List} from "linqts";
import {
    SET_ITEM_PRICE_TO_UPLOAD,
    SetItemPriceToUploadActionType
} from "../types/reducerTypes/actionTypes/Trading/SetItemPriceToUploadActionType";


let initialState: TradingStateType = {
    items: [],
    selectedItemId: "",
    itemShowMode: ItemShowMode.View,
    loadedItem: null,
    last24deals: [],
    deals: [],
    itemNameToUpload: "",
    itemPriceToUpload: 0,
    itemAttributesToUpload: [],
    itemRarityToUpload: ItemRarityEnum.Common
}

const TradingReducer = (state = initialState, action: GlobalTradingActionType): TradingStateType => {
    switch (action.type) {
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
        case LOAD_LAST_24_HOURS_ACTION_TYPE:
            return {
                ...state,
                last24deals: [...action.deals]
            }
        case LOAD_LAST_DEALS_ACTION_TYPE:
            return {
                ...state,
                deals: [...action.deals]
            }
        case SET_ITEM_NAME_TO_UPLOAD:
            return {
                ...state,
                itemNameToUpload: action.name
            }
        case SET_ITEM_PRICE_TO_UPLOAD:
            let price = isNaN(action.price) ? state.itemPriceToUpload : action.price
            return {
                ...state,
                itemPriceToUpload: price
            }
        case SET_ITEM_RARITY_TO_UPLOAD:
            return {
                ...state,
                itemRarityToUpload: action.rarity
            }
        case ADD_ATTRIBUTE_ITEM:
            state.itemAttributesToUpload.push({id: v4(), name:"", description: ""})
            return {
                ...state,
                itemAttributesToUpload: [...state.itemAttributesToUpload]
            }
        case SET_ITEM_ATTRIBUTE:
            let itemAttributesToUpload = state.itemAttributesToUpload.map(x=>{
                if(x?.id === action.id){
                    return {...x, name: action.name}
                }
                return x
            })
            return {
                ...state,
                itemAttributesToUpload: [...itemAttributesToUpload]
            }
        case DELETE_ITEM_ATTRIBUTE:
            return {
                ...state,
                itemAttributesToUpload: [...new List(state.itemAttributesToUpload)
                    .Where(x=>x?.id !== action.id).ToArray()]
            }
        default:
            return {
                ...state
            }
    }
}

export const loadItemsActionCreate = (items: Array<ItemType>): LoadItemsActionType => ({
    type: LOAD_ITEMS_ACTION_TYPE, items: items
})

export const loadItemActionCreate = (item: ItemType): LoadItemActionType => ({
    type: LOAD_ITEM_ACTION_TYPE, item: item
})

export const selectItemActionCreate = (id: string): SelectItemActionType => ({
    type: SELECT_ITEM_ACTION_TYPE, id: id
})

export const selectItemShowModeActionCreate = (mode: ItemShowMode): SelectItemShowModeActionType => ({
    type: SELECT_ITEM_SHOW_MODE_ACTION_TYPE, mode: mode
})

export const loadLast24HoursDealsActionCreate = (deals: Array<DealType>): LoadLast24HoursDealsActionType => ({
    type: LOAD_LAST_24_HOURS_ACTION_TYPE, deals: deals
})

export const loadLastDealsActionCreate = (deals: Array<DealType>): LoadLastDealsActionType => ({
    type: LOAD_LAST_DEALS_ACTION_TYPE, deals: deals
})

export const setItemNameToUploadActionCreate = (name: string): SetItemNameToUploadActionType => ({
    type: SET_ITEM_NAME_TO_UPLOAD, name: name
})

export const setItemRarityToUploadActionCreate = (rarity: ItemRarityEnum): SetItemRarityToUploadActionType => ({
    type: SET_ITEM_RARITY_TO_UPLOAD, rarity: rarity
})

export const setItemPriceToUploadActionCreate = (price: number): SetItemPriceToUploadActionType => ({
    type: SET_ITEM_PRICE_TO_UPLOAD, price: price
})

export const addItemAttributeActionCreate = (): AddAttributeItemActionType => ({
    type: ADD_ATTRIBUTE_ITEM
})

export const setItemAttributeActionCreate = (name: string, id: string): SetItemAttributeActionType => ({
    type: SET_ITEM_ATTRIBUTE, name: name, id: id
})

export const deleteItemAttributeActionCreate = (id: string): DeleteItemAttributeActionType => ({
    type: DELETE_ITEM_ATTRIBUTE, id: id
})

export default TradingReducer;
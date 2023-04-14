import {TradingStateType} from "../types/reducerTypes/stateTypes/TradingStateType";
import {ItemRarityEnum} from "../types/models/enums/ItemRarityEnum";
import {GlobalTradingActionType} from "../types/reducerTypes/actionTypes/GlobalTradingActionType";


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
    itemLoadedById: null,
    dealLoadedById: null,
    deals: []
}

const TradingReducer = (state = initialState, action: GlobalTradingActionType) : TradingStateType => {
    return state;
}

export default TradingReducer;
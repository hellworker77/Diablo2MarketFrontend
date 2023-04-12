import {TradingStateType} from "../types/reducerTypes/stateTypes/TradingStateType";
import {ItemRarityEnum} from "../types/models/enums/ItemRarityEnum";


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
            ownerId: "guid-text-id"
        }
    ],
    itemLoadedById: null,
    dealLoadedById: null,
    deals: []
}

const tradingReducer = (state = initialState, action: any) : TradingStateType => {
    return state;
}

export default tradingReducer;
import {combineReducers, createStore} from "redux";
import TradingReducer from "./tradingReducer";
let rootReducers = combineReducers({
    tradingReducer: TradingReducer
})

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;



let store = createStore(rootReducers);

export default store;
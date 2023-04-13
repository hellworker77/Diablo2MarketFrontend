import {combineReducers, createStore} from "redux";
import TradingReducer from "./tradingReducer";
import NavReducer from "./navReducer";
import AccountReducer from "./accountReducer";
import PaymentReducer from "./paymentReducer";
let rootReducers = combineReducers({
    tradingReducer: TradingReducer,
    navReducer: NavReducer,
    accountReducer: AccountReducer,
    paymentReducer: PaymentReducer
})

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;



let store = createStore(rootReducers);

export default store;
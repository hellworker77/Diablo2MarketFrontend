import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import PaymentContainer from "./components/Payment/PaymentContainer";
import TradeContainer from "./components/Trade/TradeContainer";
import appModule from "./App.module.css"

function App() {
    return (
        <BrowserRouter>
            <div className={appModule.container}>
                <div className={appModule.nav}>
                    <NavBarContainer/>
                </div>
                <div className={appModule.content}>
                    <Routes>
                        <Route key={"payment"} path={"/payment"} element={<PaymentContainer/>}/>
                        <Route key={"trading"} path={"/trade"} element={<TradeContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

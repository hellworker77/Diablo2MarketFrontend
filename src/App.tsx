import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import PaymentContainer from "./components/Payment/PaymentContainer";
import TradeContainer from "./components/Trade/TradeContainer";
import appModule from "./App.module.css"
import ItemContainer from "./components/Item/ItemContainer";
import RightSideBarContainer from "./components/RightSideBar/RightSideBarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UserContainer from "./components/User/UserContainer";
import SignInContainer from "./components/SignIn/SignInContainer";
import SignUpContainer from "./components/SignUp/SignUpContainer";

function App() {
    return (
        <BrowserRouter>
            <div className={appModule.container}>
                <div className={appModule.nav}>
                    <NavBarContainer/>
                </div>
                <div className={appModule.content}>
                    <Routes>
                        <Route key={"signUp"} path={"/register"} element={<SignUpContainer/>}/>
                        <Route key={"signIn"} path={"/login"} element={<SignInContainer/>}/>
                        <Route key={"user"} path={"/user"} element={<UserContainer/>}/>
                        <Route key={"profile"} path={"/profile"} element={<ProfileContainer/>}/>
                        <Route key={"payment"} path={"/payment"} element={<PaymentContainer/>}/>
                        <Route key={"trading"} path={"/trade"} element={<TradeContainer/>}/>
                        <Route key={"detailItem"} path={"/ItemShow"} element={<ItemContainer/>}/>
                    </Routes>
                </div>
                <div className={appModule.right}>
                    <RightSideBarContainer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

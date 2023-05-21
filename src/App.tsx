import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import appModule from "./App.module.css"
import NavBarContainer from "./components/NavBar/NavBarContainer";
import PaymentContainer from "./components/Payment/PaymentContainer";
import TradeContainer from "./components/Trade/TradeContainer";
import ItemContainer from "./components/Item/ItemContainer";
import RightSideBarContainer from "./components/RightSideBar/RightSideBarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UserContainer from "./components/Profile/UserContainer";
import SignInContainer from "./components/SignIn/SignInContainer";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import NotificationContainer from "./components/Notification/NotificationContainer";
import LastDealsContainer from "./components/LastDeals/LastDealsContainer";
import AddItemContainer from "./components/AddItem/AddItemContainer";


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
                        <Route key={"addItem"} path={"/addItem"} element={<AddItemContainer/>}/>
                        <Route key={"history"} path={"/history"} element={<LastDealsContainer/>}/>
                        <Route key={"profile"} path={"/profile"} element={<ProfileContainer/>}/>
                        <Route key={"payment"} path={"/payment"} element={<PaymentContainer/>}/>
                        <Route key={"trading"} path={"/trade"} element={<TradeContainer/>}/>
                        <Route key={"detailItem"} path={"/itemShow"} element={<ItemContainer/>}/>
                    </Routes>
                </div>
                <div className={appModule.right}>
                    <Routes>
                        <Route key={"rightSideBar"} path={"/user"} element={<RightSideBarContainer/>}/>
                        <Route key={"rightSideBar"} path={"/addItem"} element={<RightSideBarContainer/>}/>
                        <Route key={"rightSideBar"} path={"/history"} element={<RightSideBarContainer/>}/>
                        <Route key={"rightSideBar"} path={"/profile"} element={<RightSideBarContainer/>}/>
                        <Route key={"rightSideBar"} path={"/itemShow"} element={<RightSideBarContainer/>}/>
                        <Route key={"rightSideBar"} path={"/payment"} element={<RightSideBarContainer/>}/>
                        <Route key={"rightSideBar"} path={"/trade"} element={<RightSideBarContainer/>}/>
                    </Routes>
                </div>
                <NotificationContainer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

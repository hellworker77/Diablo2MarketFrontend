import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import PaymentContainer from "./components/Payment/PaymentContainer";

function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBarContainer />
            <Routes>
                <Route key={"payment"} path={"/payment"} element={<PaymentContainer/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

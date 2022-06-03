import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./Pages/Auth/Login";
// import Register from "./Pages/Auth/Register";
// import ResetPassword from "./Pages/Auth/ResetPassword";
// import MyBag from "./Pages/MyBag";
// import Checkout from "./Pages/Checkout";
// import Custommer from "./Pages/Custommer";
// import Seller from "./Pages/Seller";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/resetPassword" element={<ResetPassword />} />
        <Route path="/mybag" element={<MyBag />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/custommer" element={<Custommer />} />
        <Route path="/seller" element={<Seller />} /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

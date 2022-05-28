import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/resetPassword" element={<ResetPassword />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

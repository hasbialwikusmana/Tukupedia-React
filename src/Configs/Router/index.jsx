import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../../Pages/Auth";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" component={Login} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

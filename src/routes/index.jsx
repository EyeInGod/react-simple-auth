import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../pages/Login";

const MainRoute = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<LoginPage />} />
  </Routes>
);

export default MainRoute;

import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";

const MainRoute = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<DashboardPage />} />
  </Routes>
);

export default MainRoute;

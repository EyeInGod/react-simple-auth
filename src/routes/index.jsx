import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";

const MainRoute = () => (
  <Routes>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default MainRoute;

import React from "react";
import { LoginForm } from "../components/LoginForm";
import { useDispatch } from "react-redux";
import { login } from "../reducers/auth.reducer";
import { useNavigate } from "react-router";

export const LoginContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = ({ userName, password }) => {
    dispatch(login({ userName, password }));
    navigate("/");
  };

  return <LoginForm onLogin={handleLogin} />;
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../reducers/auth.reducer";

export const DashboardContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { isLoggedin, token } = useSelector((state) => state.auth);

  const handleLogout = () => dispatch(logout());

  useEffect(() => {
    if (!isLoggedin) navigate("/login");
  }, [navigate, isLoggedin]);

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-5">
      <div className="text-[40px] text-black font-bold">
        Hi {(token && token.userName) || "Marcus"}
      </div>

      <button
        className="uppercase bg-cyan-400 py-[10px] px-[20px] rounded-md text-white border-[1px] border-cyan-400 hover:bg-white hover:text-cyan-400 font-bold transition-all"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

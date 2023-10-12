import React, { useState } from "react";

export const LoginForm = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-[350px] h-[350px] bg-white border-slate-300 border-[1px] rounded-lg flex flex-col justify-center items-center p-[30px] gap-5">
      <div className="font-bold text-cyan-400 text-[30px] uppercase">Login</div>
      <input
        className="p-3 border-[1px] border-slate-600 rounded-lg w-full"
        placeholder="Username"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="p-3 border-[1px] border-slate-600 rounded-lg w-full"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="uppercase bg-cyan-400 py-[10px] px-[20px] rounded-md text-white border-[1px] border-cyan-400 hover:bg-white hover:text-cyan-400 font-bold transition-all"
        onClick={() => onLogin && onLogin({ userName, password })}
      >
        Login
      </button>
    </div>
  );
};

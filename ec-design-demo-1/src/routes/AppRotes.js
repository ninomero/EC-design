import React from "react";
// SPAを実装するにあたって使用するreact-router-dom
// インストール方法 → 「npm i react-router-dom」
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import WebStore from "./nav/WebStore";
import HomePage from "./HomePage";
import {App as Framer}from "../components/framer_motion_prc/App";
import { Sidebar } from "../components/Sidebar_1/Sidebar.tsx";

const AppRotes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Framer" element={<Framer />} />
          <Route path="/Sidebar" element={<Sidebar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRotes;

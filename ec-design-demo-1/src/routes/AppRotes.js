import React from "react";
// SPAを実装するにあたって使用するreact-router-dom
// インストール方法 → 「npm i react-router-dom」
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import WebStore from "./nav/WebStore";
import HomePage from "./HomePage";

const AppRotes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRotes;

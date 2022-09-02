import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./views";
import "../src/styles/index.css";

function App() {
  return (
    <div className="min-w-700">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;

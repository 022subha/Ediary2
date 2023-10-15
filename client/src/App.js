import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<div className="h-[200vh]">Navbar</div>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Spinner from "./components/common/Spinner";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
function App() {
  const { loading } = useSelector((state) => state.auth);
  if (loading) return <Spinner />;
  else
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/verify-email" element={<VerifyEmail />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
}

export default App;

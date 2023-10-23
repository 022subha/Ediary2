import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Spinner from "./components/common/Spinner";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Setting from "./components/core/Dashboard/Setting";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import { getUserInfo } from "./services/operations/authAPI";
function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route element={<Dashboard />}>
            <Route path="/dashboard/my-profile" element={<MyProfile />}></Route>
            <Route path="/dashboard/enrolled-courses" element={<></>}></Route>
            <Route path="/dashboard/cart" element={<></>}></Route>
            <Route path="/dashboard/settings" element={<Setting />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
}

export default App;

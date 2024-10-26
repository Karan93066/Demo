import { useState } from "react";
import { Route,Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Courses from "./Components/Course";
import UserAdminPanel from "./Components/UserAdminPanel";
import AdminPanel from "./Components/AdminPanel/MainAdminPanel";
import ForgetPassword from "./Components/ForgetPassword";
import Checkout from "./Components/Checkout"
import Loader from "./Components/Loader";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subscription" element={<Courses />} />
        <Route path="/useradminpanel" element={<UserAdminPanel />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {/* <Loader/> */}
      <Footer />
    </>
  );
}

export default App;

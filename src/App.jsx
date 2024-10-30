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
import ChangePassword from "./Components/ChangePassword";
import CancelSubscription from "./Components/Cancelsubscription";
import NewSessionForm from "./Components/AdminPanel/NewSessions";
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
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/cancelsubscription" element={<CancelSubscription />} />
        <Route path="/newsession" element={<NewSessionForm />} />
        {/* <Route path="/session" element={<SessionTable />} /> */}
        </Routes>
      {/* <Loader/> */}
      <Footer />
    </>
  );
}

export default App;

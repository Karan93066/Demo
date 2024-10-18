import { useState } from "react";
import { Route,Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Courses from "./Components/Course";
import AdminPanel from "./Components/AdminPanel";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

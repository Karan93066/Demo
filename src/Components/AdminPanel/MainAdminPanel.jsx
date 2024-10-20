import React, { useState } from "react";
import { FaUsers, FaUpload, FaBookOpen, FaShoppingCart } from "react-icons/fa";
import AllUsers from "./AllUsers";
import UploadCourse from "./UploadCourse";
import PurchasedCourses from "./PurchasedCourses";
import AdminCourses from "./AdminCourses";

function AdminPanel() {
  const [activeTab, setActiveTab] = useState("allusers");
 // Function to change active link and content
 const handleLinkClick = (linkName) => {
  setActiveTab(linkName);
};
 // Conditional rendering of the main content
 const renderContent = () => {
  switch (activeTab) {
    case "allusers":
      return (
       <AllUsers/>
      );
    case "uploadcourse":
      return (
      <UploadCourse/>
      );
    case "purchasedcourse":
      return (
        <PurchasedCourses/>
      );
    case "admincourse":
      return (
       <AdminCourses/>
      );
    default:
      return null;
  }
};
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={`bg-gray-200 transition-all duration-300 p-4`}>
        <nav>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeTab === "allusers" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
                onClick={() => handleLinkClick("allusers")}
              >
                <span className="md:inline hidden">All Users</span>
                <i className="md:hidden"><FaUsers /></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeTab === "uploadcourse" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
                onClick={() => handleLinkClick("uploadcourse")}
              >
                <span className="md:inline hidden">Upload Course</span>
                <i className="md:hidden"><FaUpload /></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeTab === "purchasedcourse" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
                onClick={() => handleLinkClick("purchasedcourse")}
              >
                <span className="md:inline hidden">Purchased Course</span>
                <i className="md:hidden"><FaShoppingCart /></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeTab === "admincourse" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
                onClick={() => handleLinkClick("admincourse")}
              >
                <span className="md:inline hidden">Admin Course</span>
                <i className="md:hidden"><FaBookOpen /></i>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">{renderContent()}</main>
    </div>
  );
}

export default AdminPanel;

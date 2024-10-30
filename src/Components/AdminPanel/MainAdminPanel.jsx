import React, { useState } from "react";
import {
  FaUsers,
  FaUpload,
  FaBookOpen,
  FaShoppingCart,
  FaTimes,
  FaCalendarAlt,
} from "react-icons/fa";
import AllUsers from "./AllUsers";
import UploadCourse from "./UploadCourse";
import PurchasedCourses from "./PurchasedCourses";
import AdminCourses from "./AdminCourses";
import CancelledSubscriptions from "./CancelSubscription";
import SessionList from "./Sessions";

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
        return <AllUsers />;
      case "uploadcourse":
        return <UploadCourse />;
      case "purchasedcourse":
        return <PurchasedCourses />;
      case "admincourse":
        return <AdminCourses />;
      case "cancelled":
        return <CancelledSubscriptions />;
      case "allsession":
        return <SessionList />;
      default:
        return null;
    }
  };
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-[#171E30] text-white transition-all duration-300 p-4`}
      >
        <nav>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeTab === "allusers" ? "bg-red-500 text-white" : ""
                } hover:bg-red-600 hover:text-white`}
                onClick={() => handleLinkClick("allusers")}
              >
                <span className="md:inline hidden">All Users</span>
                <i className="md:hidden">
                  <FaUsers />
                </i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeTab === "uploadcourse" ? "bg-red-500 text-white" : ""
                } hover:bg-red-600 hover:text-white`}
                onClick={() => handleLinkClick("uploadcourse")}
              >
                <span className="md:inline hidden">Upload Video</span>
                <i className="md:hidden">
                  <FaUpload />
                </i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeTab === "purchasedcourse" ? "bg-red-500 text-white" : ""
                } hover:bg-red-600 hover:text-white`}
                onClick={() => handleLinkClick("purchasedcourse")}
              >
                <span className="md:inline hidden">Purchased Subscription</span>
                <i className="md:hidden">
                  <FaShoppingCart />
                </i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeTab === "admincourse" ? "bg-red-500 text-white" : ""
                } hover:bg-red-600 hover:text-white`}
                onClick={() => handleLinkClick("admincourse")}
              >
                <span className="md:inline hidden">All Videos</span>
                <i className="md:hidden">
                  <FaBookOpen />
                </i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeTab === "cancelled" ? "bg-red-500 text-white" : ""
                } hover:bg-red-600 hover:text-white`}
                onClick={() => handleLinkClick("cancelled")}
              >
                <span className="md:inline hidden">Cancel Subscription</span>
                <i className="md:hidden">
                  <FaTimes />
                </i>{" "}
                {/* New icon for "Cancel Subscription" */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeTab === "allsession" ? "bg-red-500 text-white" : ""
                } hover:bg-red-600 hover:text-white`}
                onClick={() => handleLinkClick("allsession")}
              >
                <span className="md:inline hidden">View All Session</span>
                <i className="md:hidden">
                  <FaCalendarAlt />
                </i>{" "}
                {/* New icon for "View All Session" */}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Divider */}
      <div className="w-[0.10rem] bg-red-500"></div>

      {/* Main Content */}
      <main className="flex-1 bg-[#171E30] p-5">{renderContent()}</main>
    </div>
  );
}

export default AdminPanel;

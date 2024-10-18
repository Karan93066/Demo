import React from "react";

function Dashboard() {
  return (
    <div className="flex min-h-screen border rounded-xl">
      {/* Sidebar */}
      <aside className="bg-gray-200 md:w-64 w-20 transition-all duration-300">
        {/* Profile Section (hidden on mobile) */}
        <div className="hidden md:flex flex-col items-center p-6">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h3 className="text-xl font-semibold">John Doe</h3>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-10">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white text-center md:text-left"
              >
                <span className="md:inline hidden">My Profile</span>
                <i className="fas fa-user md:hidden"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white text-center md:text-left"
              >
                <span className="md:inline hidden">Enrolled Courses</span>
                <i className="fas fa-book md:hidden"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white text-center md:text-left"
              >
                <span className="md:inline hidden">Wishlist</span>
                <i className="fas fa-heart md:hidden"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white text-center md:text-left"
              >
                <span className="md:inline hidden">My Quiz Attempts</span>
                <i className="fas fa-clipboard-list md:hidden"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white text-center md:text-left"
              >
                <span className="md:inline hidden">Order History</span>
                <i className="fas fa-shopping-cart md:hidden"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white text-center md:text-left"
              >
                <span className="md:inline hidden">Question & Answer</span>
                <i className="fas fa-question-circle md:hidden"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white text-center md:text-left"
              >
                <span className="md:inline hidden">Settings</span>
                <i className="fas fa-cog md:hidden"></i>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>
          Welcome to your dashboard! Here you can manage your profile, courses,
          and other settings.
        </p>

        {/* Add more content or components below */}
        <div className="mt-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              This is the overview section where you can see your recent
              activities or important information.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

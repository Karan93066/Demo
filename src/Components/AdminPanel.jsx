import React from "react";

function Dashboard() {
  return (
    <div className="flex min-h-screen border rounded-xl">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200">
        {/* Profile Section */}
        <div className="p-6 flex flex-col items-center">
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
              <a href="#" className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white">
                My Profile
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white">
                Enrolled Courses
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white">
                My Quiz Attempts
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white">
                Order History
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white">
                Question & Answer
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-[#3e64de] hover:text-white">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your dashboard! Here you can manage your profile, courses, and other settings.</p>

        {/* Add more content or components below */}
        <div className="mt-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>This is the overview section where you can see your recent activities or important information.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

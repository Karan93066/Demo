import React from "react";

function Loader() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Spinner */}
      <div className="loader animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500 mb-4"></div>
      
      {/* Loading text */}
      <p className="text-lg font-semibold text-gray-700 animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}

export default Loader;

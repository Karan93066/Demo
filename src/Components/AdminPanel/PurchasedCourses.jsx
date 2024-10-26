import React from "react";

function PurchasedCourses() {
  // Dummy data for purchased courses, can be replaced by API calls
  const purchasedCourses = [
    { id: 1, name: "Secrets of Profitable Trading", price: "$100", buyer: "John Doe" },
    { id: 2, name: "Forex Elite Training", price: "$150", buyer: "Jane Smith" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-red-500">Purchased Subscription</h2>
      <div className="relative overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-red-500 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Video Name</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Buyer</th>
            </tr>
          </thead>
          <tbody>
            {purchasedCourses.map((course) => (
              <tr key={course.id} className="bg-white border-b text-black hover:bg-gray-100">
                <td className="px-6 py-4">{course.id}</td>
                <td className="px-6 py-4">{course.name}</td>
                <td className="px-6 py-4">{course.price}</td>
                <td className="px-6 py-4">{course.buyer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchasedCourses;

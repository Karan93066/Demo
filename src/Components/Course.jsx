import React from "react";
import { useNavigate } from "react-router-dom";
const coursesData = [
  {
    id: 1,
    thumbnail: "https://via.placeholder.com/150",
    title: "JavaScript Basics",
    tutorProfile: "https://via.placeholder.com/50",
    tutorName: "John Doe",
    actualPrice: 100,
    offPrice: 75,
    available: true,
  },
  {
    id: 2,
    thumbnail: "https://via.placeholder.com/150",
    title: "React.js for Beginners",
    tutorProfile: "https://via.placeholder.com/50",
    tutorName: "Jane Smith",
    actualPrice: 150,
    offPrice: 100,
    available: true,
  },
  {
    id: 3,
    thumbnail: "https://via.placeholder.com/150",
    title: "Advanced Node.js",
    tutorProfile: "https://via.placeholder.com/50",
    tutorName: "Mark Lee",
    actualPrice: 200,
    offPrice: 150,
    available: false,
  },
  {
    id: 4,
    thumbnail: "https://via.placeholder.com/150",
    title: "CSS Mastery",
    tutorProfile: "https://via.placeholder.com/50",
    tutorName: "Sarah Brown",
    actualPrice: 120,
    offPrice: null, // No discount available
    available: false,
  },
  {
    id: 5,
    thumbnail: "https://via.placeholder.com/150",
    title: "CSS Mastery",
    tutorProfile: "https://via.placeholder.com/50",
    tutorName: "Sarah Brown",
    actualPrice: 120,
    offPrice: null, // No discount available
    available: false,
  },
];

function CourseCard({ course }) {
  const navigate = useNavigate(); // Get the navigate function

  const handleEnroll = () => {
    // Navigate to the checkout page with course details
    navigate("/checkout", { state: { course } });
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden max-w-xs mx-auto my-4">
      <img
        className="w-full h-48 object-cover"
        src={course.thumbnail}
        alt={course.title}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {course.title}
        </h2>
        <div className="flex items-center mb-2">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={course.tutorProfile}
            alt={course.tutorName}
          />
          <p className="text-gray-700">{course.tutorName}</p>
        </div>

        <div className="mb-4">
          {course.offPrice ? (
            <>
              <p className="text-green-500 font-bold text-lg">
                ${course.offPrice}
              </p>
              <p className="text-gray-500 line-through">${course.actualPrice}</p>
            </>
          ) : (
            <p className="text-gray-800 font-bold text-lg">
              ${course.actualPrice}
            </p>
          )}
        </div>

        <div>
          {course.available ? (
            <button 
              onClick={handleEnroll} // Update to handleEnroll function
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Enroll Now
            </button>
          ) : (
            <button className="bg-gray-400 text-white py-2 px-4 rounded w-full cursor-not-allowed">
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Courses() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-center mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;

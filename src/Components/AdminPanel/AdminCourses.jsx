import { useState } from "react";

function AllCourses() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Secrets of Profitable Trading",
      price: "200",
      offPrice: "150",
      demoVideo: "demo1.mp4",
      courseVideo: "course1.mp4",
      thumbnail: null, // Placeholder for thumbnail
    },
    {
      id: 2,
      name: "Risk Management Strategy",
      price: "100",
      offPrice: "80",
      demoVideo: "demo2.mp4",
      courseVideo: "course2.mp4",
      thumbnail: null,
    },
  ]);

  const [editingCourse, setEditingCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (course) => {
    setEditingCourse(course);
    setIsEditing(true); // Switch to the edit view
  };

  const handleDelete = (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      const updatedCourses = courses.filter((course) => course.id !== courseId);
      setCourses(updatedCourses);
    }
  };

  const handleBack = () => {
    setIsEditing(false); // Switch back to the courses list
    setEditingCourse(null); // Reset the editing course
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">All Courses</h2>

      {!isEditing ? (
        // Courses list view
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg p-4">
              <div className="mb-4">
                {course.thumbnail ? (
                  <img
                    src={URL.createObjectURL(course.thumbnail)}
                    alt={course.name}
                    className="w-full h-40 object-cover rounded"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded">
                    <span>No Thumbnail</span>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p className="text-gray-600">Price: ${course.price}</p>
              <p className="text-gray-600">Off Price: ${course.offPrice}</p>
              <p className="text-gray-600">Demo Video: {course.demoVideo}</p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleEdit(course)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Edit course view
        <EditCourse
          course={editingCourse}
          setEditingCourse={setEditingCourse}
          courses={courses}
          setCourses={setCourses}
          handleBack={handleBack} // Pass handleBack to EditCourse
        />
      )}
    </div>
  );
}

const EditCourse = ({ course, setEditingCourse, courses, setCourses, handleBack }) => {
  const [formData, setFormData] = useState({
    name: course.name,
    price: course.price,
    offPrice: course.offPrice,
    courseVideo: course.courseVideo,
    demoVideo: course.demoVideo,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCourses = courses.map((c) =>
      c.id === course.id ? { ...course, ...formData } : c
    );
    setCourses(updatedCourses);
    handleBack(); // Call handleBack after saving changes
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-4">Edit Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Course Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Off Price</label>
          <input
            type="number"
            name="offPrice"
            value={formData.offPrice}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-2">Course Video</label>
          <input
            type="file"
            name="courseVideo"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, courseVideo: e.target.files[0] }))
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          {course.courseVideo && (
            <div className="text-sm text-gray-500 mt-2">File: {course.courseVideo}</div>
          )}
        </div>

        <div>
          <label className="block mb-2">Demo Video</label>
          <input
            type="file"
            name="demoVideo"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, demoVideo: e.target.files[0] }))
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          {course.demoVideo && (
            <div className="text-sm text-gray-500 mt-2">File: {course.demoVideo}</div>
          )}
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AllCourses;

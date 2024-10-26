import { useState } from "react";

function UploadCourse() {
  const [courseData, setCourseData] = useState({
    name: "",
    price: "",
    offPrice: "",
    courseVideo: null,
    demoVideo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setCourseData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to upload course data
    console.log(courseData);
  };

  return (
    <div className="bg-white p-6 mt-[7%] rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-red-500">Upload Video Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-red-500">Video Name</label>
          <input
            type="text"
            name="name"
            value={courseData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded leading-tight focus:outline-none  focus:border-red-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-red-500">Price</label>
          <input
            type="number"
            name="price"
            value={courseData.price}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded leading-tight focus:outline-none  focus:border-red-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-red-500">Off Price</label>
          <input
            type="number"
            name="offPrice"
            value={courseData.offPrice}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded leading-tight focus:outline-none  focus:border-red-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-red-500">Video</label>
          <input
            type="file"
            name="courseVideo"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded leading-tight focus:outline-none  focus:border-red-500"
            required
          />
          {courseData.courseVideo && (
            <div className="mt-2 text-sm text-gray-600">
              File: {courseData.courseVideo.name}
            </div>
          )}
        </div>

        <div>
          <label className="block mb-2 text-red-500">Demo Video</label>
          <input
            type="file"
            name="demoVideo"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded leading-tight focus:outline-none  focus:border-red-500"
          />
          {courseData.demoVideo && (
            <div className="mt-2 text-sm text-gray-600">
              File: {courseData.demoVideo.name}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg leading-tight focus:outline-none  hover:bg-red-700"
        >
          Upload Course
        </button>
      </form>
    </div>
  );
}

export default UploadCourse;

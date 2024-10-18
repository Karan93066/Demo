import React, { useState } from "react";

function Signup() {
  // State for form values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // For displaying error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Check if password and confirm password are the same
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Reset error message if everything is okay
    setError("");

    const signupData = {
      firstName,
      lastName,
      username,
      email,
      password,
    };
    console.log(signupData);

    // Add your backend API call logic here
  };

  return (
    <>
      <main className="main bg-white px-6 md:px-16 m-6">
        <div className="w-full border border-black-100 shadow-xl border-xl max-w-xl p-10 mx-auto lg:my-16">
          <form onSubmit={handleSubmit} className="border-b-2 py-3">
            <h1 className="text-xl mb-2">Create Your Account</h1>

            {/* Display error if exists */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="********"
                required
              />
            </div>

            <div>
              <button
                className="w-full bg-[#3e64de]  text-white py-2 px-3 rounded"
                type="submit"
              >
                <a href="/adminpanel">
                Sign Up
                </a>
              </button>
            </div>
          </form>

          <div className="mt-2 mb-3">
            <a href="/" className="text-sm text-[#3e64de]  hover:underline">
              Already have an account? Log in
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;

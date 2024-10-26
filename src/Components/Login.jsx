import React, { useState } from "react";

function Login() {
  // State for form values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const loginData = {
      email,
      password,
      remember,
    };
    console.log(loginData);
  };

  return (
    <>
      <main
      style={{
        backgroundImage: `url('./Background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="main w-full px-6 md:px-20 m-6">
        <div className="w-full max-w-2xl border border-gray-200 shadow-2xl rounded-lg p-10 mx-auto bg-white lg:my-16">
        <form onSubmit={handleSubmit} method="post" class="border-b-2 py-3">
            <h1 class="text-xl mb-2">Hi, Welcome Back!</h1>
           
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-red-500"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state
                placeholder="chino@email.com"
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
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-red-500"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state
                placeholder="******************"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="text-gray-600 flex items-center"
                htmlFor="remember"
              >
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)} // Update state
                />
                <span className="text-sm">Remember me</span>
              </label>
            </div>
            <div>
              <button
                class="w-full bg-red-500 hover:bg-red-600  text-white py-2 px-3 rounded"
                type="submit"
              >
                 <a href="/adminpanel">
                Login
                </a>
              </button>
            </div>
          </form>
          <div class="mt-2 mb-3">
            <a href="/signup" className="text-sm text-red-500 hover:text-red-600 hover:underline" >
              Sign up
            </a>
            <br />
            <a href="/forgetpassword" className="text-sm text-red-500 hover:text-red-600 hover:underline mt-3 block">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default Login;

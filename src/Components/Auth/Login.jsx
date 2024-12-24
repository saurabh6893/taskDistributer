import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitAction = (e) => {
    e.preventDefault();
    console.log("object");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeIn">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Sign In
        </h2>
        <form className="space-y-4" onSubmit={(e) => submitAction(e)}>
          <div>
            <label
              className="block text-sm font-medium text-gray-300 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-300 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-300">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-400 hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-4 text-center">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

// TailwindCSS Classes Explanation:
// 1. bg-gradient-to-br: Creates a gradient background.
// 2. animate-fadeIn: You can define this keyframe for smooth fade-in animation.
// 3. focus:ring-2: Adds a ring effect around inputs when focused.
// 4. transition-transform: Smooth scaling effect on button hover.

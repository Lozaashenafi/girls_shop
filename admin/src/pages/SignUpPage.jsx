import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login({ email, password });
    if (result.success) {
      navigate("/"); // redirect after login
      console.log("Login successful");
      console.log(result);
    } else {
      setErrorMsg(result.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen font-sans">
      {/* Left Pane */}
      <div className="relative w-full md:w-1/2 bg-gradient-to-br from-pink-500 to-red-600 flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-5xl font-bold">Sign In</h1>
      </div>

      {/* Right Pane */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-8 md:p-16">
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
          {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-500 mb-1">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-700 border-b border-gray-300 focus:outline-none focus:border-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 font-semibold  mb-1">
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-gray-600 border-b border-gray-300 focus:outline-none focus:border-red-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition-colors"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

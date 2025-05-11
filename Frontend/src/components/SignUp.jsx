import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await axios.post("http://localhost:5000/signup", form);

      setTimeout(() => {
        toast.success("User Created Successfully, Kindly Login!");
        navigate("/login");
      }, 3000);
    } catch (err) {
      toast.error(
        err.response?.data?.msg || "SignUp Failed, Try again after some time."
      );
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign Up to Uxcel for free
        </h1>
        <div className="flex gap-2 mb-5 items-center justify-center">
          <h2>Already have an account?</h2>
          <div
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            {" "}
            Log in
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div
            className="font-semibold flex justify-center bg-blue-600 text-white rounded py-2 cursor-pointer"
            onClick={() => {
              toast.info("Something went wrong! Try with Email");
            }}
          >
            <img src="/google.png" className="invert h-6 pr-3" alt="" />
            Continue with Google
          </div>
          <div
            className="font-semibold flex justify-center text-black rounded py-2 border-gray-300 border cursor-pointer"
            onClick={() => {
              toast.info("Something went wrong! Try with Email");
            }}
          >
            <img src="/apple.png" className=" h-6 pr-3" alt="" />
            Continue with Apple
          </div>
        </div>

        <div className="mt-8 mb-6 flex items-center gap-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <img src="/email.png" alt="email icon" className="h-6 w-6" />
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

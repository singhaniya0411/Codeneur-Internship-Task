import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const DashBoard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Unauthorized! Please login.");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header with Logout Button */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors duration-200 flex items-center"
        >
          <img src="/logout.png" className="mr-2 w-4" alt="" />
          Logout
        </button>
      </div>

      {/* Welcome Content */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Uxcel!
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          To personalize your experience, we'll ask you a few questions.
        </p>
        <button
          onClick={() => toast.info("Feature coming soon!")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center"
        >
          Get Started
          <img className="w-10" src="/get-started.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default DashBoard;

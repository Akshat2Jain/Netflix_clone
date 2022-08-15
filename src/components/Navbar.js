import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user)
  async function handlelogout() {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          Netflix
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/Account">
            <button className="text-white pr-4">Account</button>
          </Link>

          <button
          onClick={handlelogout} 
          className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/Login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/Signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

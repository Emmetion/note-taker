import React from "react";
import { signOut } from "firebase/auth";
import { IoIosPaper } from "react-icons/io";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";

export default function TopBar() {
  const { userID, isAuth } = useGetUserInfo();
  const navigate = useNavigate();

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-16 w-screen flex-row border-b border-b-black bg-white">
      <div className="ml-5 flex h-full w-fit items-center justify-center">
        <a href={"/"}>
          <p className="flex flex-row text-center text-3xl">
            <IoIosPaper className="my-auto" /> My Note-Taker
          </p>
        </a>
      </div>
      <div className="ml-auto mr-5 flex h-full items-center justify-center">
        {isAuth ? (
          <button onClick={signUserOut} className="w-auto">
            <p className="flex flex-row rounded-md border-2 border-blue-400 bg-blue-400 text-2xl text-white hover:bg-blue-300">
              <CiLogout className="my-auto mr-1" />
              Logout
            </p>
          </button>
        ) : (
          <a href={"login"} className="w-auto">
            <p className="flex flex-row rounded-md border-2 border-blue-400 bg-blue-400 text-2xl text-white hover:bg-blue-300">
              <CiLogin className="my-auto mr-1" />
              Login
            </p>
          </a>
        )}
      </div>
    </div>
  );
}

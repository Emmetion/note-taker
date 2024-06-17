import React from "react"
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
    <div className="w-screen h-16 border-b border-b-black bg-white flex flex-row">
        <div className="ml-5 w-fit h-full flex items-center justify-center ">
            <a href={'/'}>
            <p className="text-center text-3xl flex flex-row"><IoIosPaper className="my-auto"/>{' '}My Note-Taker</p>
            </a>
        </div>
        <div className="mr-5 ml-auto justify-center items-center h-full flex">
                {
                    isAuth ? 
                    <button onClick={signUserOut} className="w-auto">
                        <p className="text-2xl flex flex-row bg-blue-400 text-white hover:bg-blue-300 rounded-md border-2 border-blue-400"
                        ><CiLogout className="my-auto mr-1"/>Logout</p>
                    </button>
                    : 
                    <a href={'login'} className="w-auto">
                        <p className="text-2xl flex flex-row bg-blue-400 text-white hover:bg-blue-300 rounded-md border-2 border-blue-400"><CiLogin className="my-auto mr-1"/>Login</p>
                    </a>
                }
        </div>
    </div>
    )
}
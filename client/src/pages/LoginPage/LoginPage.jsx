import { useNavigate, Navigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { auth, provider } from "../../config/firebase-config";
import GoogleSVG from "../../assets/google.svg";
import { Button } from "@material-tailwind/react";

export default function LoginPage() {
    const navigate = useNavigate();
    const { isAuth } = useGetUserInfo();

    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider);
        const authInfo = {
          userID: results.user.uid,
          name: results.user.displayName,
          profilePhoto: results.user.photoURL,
          isAuth: true,
        };
        localStorage.setItem("auth", JSON.stringify(authInfo));
        console.log("userID: " + authInfo.userID);
        navigate("/my-notes");
    };

    if (isAuth) {
        return <Navigate to={'/my-notes'}/>;
    }


    return (
        <div className="w-full h-full flex flex-col">
            <p className="text-3xl text-center border-b-2 border-gray-500 w-fit mx-auto">
               Login 
            </p>
            <div className="pt-10"/>
            <button className="w-fit text-white text-2xl bg-blue-500 border-2 rounded-md border-blue-500 hover:bg-blue-400 mx-auto"
                onClick={signInWithGoogle}>
                    <svg href={GoogleSVG} className="w-10 h-10 bg-red-400"/>Login with Google
            </button>
        </div>
    )
}
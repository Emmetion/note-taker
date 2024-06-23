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
    return <Navigate to={"/my-notes"} />;
  }

  return (
    <div className="flex h-full w-full flex-col">
      <p className="mx-auto w-fit border-b-2 border-gray-500 text-center text-3xl">
        Login
      </p>
      <div className="pt-10" />
      <button
        className="mx-auto w-fit rounded-md border-2 border-blue-500 bg-blue-500 text-2xl text-white hover:bg-blue-400"
        onClick={signInWithGoogle}
      >
        <svg href={GoogleSVG} className="h-10 w-10 bg-red-400" />
        Login with Google
      </button>
    </div>
  );
}

import { useNavigate, Navigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { auth, provider } from "../../config/firebase-config";
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
        navigate("/my-notes");
    };

    if (isAuth) {
        return <Navigate to={'/my-notes'}/>;
    }


    return (
        <div className="w-full h-full flex">
            <p className="text-3xl text-center">
               Login 
            </p>
            <button className="w-fit bg-blue-500 border-2 rounded-md border-blue-500 hover:bg-blue-400 hover:"
                onClick={signInWithGoogle}>
                    Login with Google
            </button>
        </div>
    )
}
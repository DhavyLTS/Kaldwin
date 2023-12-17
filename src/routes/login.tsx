import { useAuthContext } from "../hooks/useAuthContext"
import { Navigate } from "react-router-dom";



export default function Login() {

    const { user, GooglePopup } = useAuthContext();
    if (user) return <Navigate to="/dashboard" />
    if (!user) GooglePopup();
    return <>

    </>
}
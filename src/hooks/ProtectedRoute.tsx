import { useAuthContext } from "./useAuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const { user } = useAuthContext();
    if (!user) return <Navigate to="/" />
    return <Outlet />
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ProtectedRoute from "./hooks/ProtectedRoute"
import AuthContext from "./hooks/useAuthContext"
import Dashboard from "./routes/dashboard"
import Login from "./routes/login"
import Room from "./routes/room"

export default function App() {
    return <Router>
        <Routes>
            <Route element={<AuthContext />}>
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/room/:roomId" element={<Room />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    </Router>

}
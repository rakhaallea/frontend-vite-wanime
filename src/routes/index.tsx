import { useAuth } from "@/context/useAuth";

import { Routes, Route, Navigate } from "react-router-dom";

// import Home from "@/views/home";
import Login from "@/views/auth/login";
import Register from "@/views/auth/register";
import Home from "@/views/auth/home";

const AppRoutes = () => {

    //destructure context "isAuthenticated"
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            {/* route "/" */}
            <Route path="/" element={<Home />} />

            {/* route "/register" */}
            <Route path="/register" element={
                isAuthenticated ? <Navigate to="/" replace /> : <Register />
            } />

            {/* route "/login" */}
            <Route path="/login" element={
                isAuthenticated ? <Navigate to="/" replace /> : <Login />
            } />
        </Routes>
    )
}

export default AppRoutes
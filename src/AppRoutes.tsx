import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Homepage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUpPage";

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="registrar" element={<SignUp />} />
            </Routes>
        </Router>
    )
}
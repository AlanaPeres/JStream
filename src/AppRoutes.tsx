import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Homepage } from "./pages/homePage/homePage";
import { LoginPage } from "./pages/loginPage/loginPage";
import SignUp from "./pages/SignUpPage/signUpPage";
import { Transferencia } from "./pages/transferenciaPage/transferenciaPage";

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="registrar" element={<SignUp />} />
                <Route path="transferencia" element={<Transferencia />} />
            </Routes>
        </Router>
    )
}
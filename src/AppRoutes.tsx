import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Homepage } from "./pages/homePage/homePage";
import { LoginPage } from "./pages/loginPage/loginPage";
import SignUp from "./pages/SignUpPage/signUpPage";
import { TransferenciaPage } from "./pages/transferenciaPage/transferenciaPage";
import { SaldoPage } from "./pages/saldoPage/saldoPage";

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="registrar" element={<SignUp />} />
                <Route path="transferencia" element={<TransferenciaPage />} />
                <Route path="/saldo" element={<SaldoPage />} />
            </Routes>
        </Router>
    )
}